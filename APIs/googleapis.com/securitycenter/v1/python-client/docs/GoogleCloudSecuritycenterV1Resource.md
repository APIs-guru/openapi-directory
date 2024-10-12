# GoogleCloudSecuritycenterV1Resource

Information related to the Google Cloud resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The human readable name of the resource. | [optional] 
**folders** | [**List[Folder]**](Folder.md) | Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. | [optional] [readonly] 
**name** | **str** | The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name | [optional] 
**parent** | **str** | The full resource name of resource&#39;s parent. | [optional] 
**parent_display_name** | **str** | The human readable name of resource&#39;s parent. | [optional] 
**project** | **str** | The full resource name of project that the resource belongs to. | [optional] 
**project_display_name** | **str** | The project ID that the resource belongs to. | [optional] 
**type** | **str** | The full resource type of the resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1_resource import GoogleCloudSecuritycenterV1Resource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1Resource from a JSON string
google_cloud_securitycenter_v1_resource_instance = GoogleCloudSecuritycenterV1Resource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1Resource.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1_resource_dict = google_cloud_securitycenter_v1_resource_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1Resource from a dict
google_cloud_securitycenter_v1_resource_from_dict = GoogleCloudSecuritycenterV1Resource.from_dict(google_cloud_securitycenter_v1_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


