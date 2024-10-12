# GoogleCloudSecuritycenterV1ResourceSelector

Resource for selecting resource type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_types** | **List[str]** | The resource types to run the detector on. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1_resource_selector import GoogleCloudSecuritycenterV1ResourceSelector

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1ResourceSelector from a JSON string
google_cloud_securitycenter_v1_resource_selector_instance = GoogleCloudSecuritycenterV1ResourceSelector.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1ResourceSelector.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1_resource_selector_dict = google_cloud_securitycenter_v1_resource_selector_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1ResourceSelector from a dict
google_cloud_securitycenter_v1_resource_selector_from_dict = GoogleCloudSecuritycenterV1ResourceSelector.from_dict(google_cloud_securitycenter_v1_resource_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


