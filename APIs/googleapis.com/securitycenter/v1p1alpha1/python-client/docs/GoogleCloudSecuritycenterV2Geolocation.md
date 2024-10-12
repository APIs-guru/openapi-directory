# GoogleCloudSecuritycenterV2Geolocation

Represents a geographical location for a given access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region_code** | **str** | A CLDR. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_geolocation import GoogleCloudSecuritycenterV2Geolocation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Geolocation from a JSON string
google_cloud_securitycenter_v2_geolocation_instance = GoogleCloudSecuritycenterV2Geolocation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Geolocation.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_geolocation_dict = google_cloud_securitycenter_v2_geolocation_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Geolocation from a dict
google_cloud_securitycenter_v2_geolocation_from_dict = GoogleCloudSecuritycenterV2Geolocation.from_dict(google_cloud_securitycenter_v2_geolocation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


