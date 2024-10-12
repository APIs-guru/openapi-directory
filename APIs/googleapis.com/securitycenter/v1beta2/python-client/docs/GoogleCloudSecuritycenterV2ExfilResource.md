# GoogleCloudSecuritycenterV2ExfilResource

Resource where data was exfiltrated from or exfiltrated to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**components** | **List[str]** | Subcomponents of the asset that was exfiltrated, like URIs used during exfiltration, table names, databases, and filenames. For example, multiple tables might have been exfiltrated from the same Cloud SQL instance, or multiple files might have been exfiltrated from the same Cloud Storage bucket. | [optional] 
**name** | **str** | The resource&#39;s [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_exfil_resource import GoogleCloudSecuritycenterV2ExfilResource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2ExfilResource from a JSON string
google_cloud_securitycenter_v2_exfil_resource_instance = GoogleCloudSecuritycenterV2ExfilResource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2ExfilResource.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_exfil_resource_dict = google_cloud_securitycenter_v2_exfil_resource_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2ExfilResource from a dict
google_cloud_securitycenter_v2_exfil_resource_from_dict = GoogleCloudSecuritycenterV2ExfilResource.from_dict(google_cloud_securitycenter_v2_exfil_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


