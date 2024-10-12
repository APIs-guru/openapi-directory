# ToolsetProject

Abstract platform project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.toolset_project import ToolsetProject

# TODO update the JSON string below
json = "{}"
# create an instance of ToolsetProject from a JSON string
toolset_project_instance = ToolsetProject.from_json(json)
# print the JSON string representation of the object
print(ToolsetProject.to_json())

# convert the object into a dict
toolset_project_dict = toolset_project_instance.to_dict()
# create an instance of ToolsetProject from a dict
toolset_project_from_dict = ToolsetProject.from_dict(toolset_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


