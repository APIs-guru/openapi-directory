# GoogleCloudSecuritycenterV2ContactDetails

Details about specific contacts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**List[GoogleCloudSecuritycenterV2Contact]**](GoogleCloudSecuritycenterV2Contact.md) | A list of contacts | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_contact_details import GoogleCloudSecuritycenterV2ContactDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2ContactDetails from a JSON string
google_cloud_securitycenter_v2_contact_details_instance = GoogleCloudSecuritycenterV2ContactDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2ContactDetails.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_contact_details_dict = google_cloud_securitycenter_v2_contact_details_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2ContactDetails from a dict
google_cloud_securitycenter_v2_contact_details_from_dict = GoogleCloudSecuritycenterV2ContactDetails.from_dict(google_cloud_securitycenter_v2_contact_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


