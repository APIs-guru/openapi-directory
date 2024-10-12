# Resource

Information related to the Google Cloud resource that is associated with this finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The human readable name of the resource. | [optional] 
**folders** | [**List[Folder]**](Folder.md) | Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. | [optional] 
**name** | **str** | The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name | [optional] 
**parent_display_name** | **str** | The human readable name of resource&#39;s parent. | [optional] 
**parent_name** | **str** | The full resource name of resource&#39;s parent. | [optional] 
**project_display_name** | **str** | The project ID that the resource belongs to. | [optional] 
**project_name** | **str** | The full resource name of project that the resource belongs to. | [optional] 
**type** | **str** | The full resource type of the resource. | [optional] 

## Example

```python
from openapi_client.models.resource import Resource

# TODO update the JSON string below
json = "{}"
# create an instance of Resource from a JSON string
resource_instance = Resource.from_json(json)
# print the JSON string representation of the object
print(Resource.to_json())

# convert the object into a dict
resource_dict = resource_instance.to_dict()
# create an instance of Resource from a dict
resource_from_dict = Resource.from_dict(resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


