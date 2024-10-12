# Workspace

A single workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Time when the workspace was created. | [optional] 
**display_name** | **str** | The human readable title of the workspace. | [optional] 
**name** | **str** | The resource name of the workspace. Workspace names have the form &#x60;workspaces/{workspace}&#x60;. | [optional] 
**tables** | [**List[Table]**](Table.md) | The list of tables in the workspace. | [optional] 
**update_time** | **str** | Time when the workspace was last updated. | [optional] 

## Example

```python
from openapi_client.models.workspace import Workspace

# TODO update the JSON string below
json = "{}"
# create an instance of Workspace from a JSON string
workspace_instance = Workspace.from_json(json)
# print the JSON string representation of the object
print(Workspace.to_json())

# convert the object into a dict
workspace_dict = workspace_instance.to_dict()
# create an instance of Workspace from a dict
workspace_from_dict = Workspace.from_dict(workspace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


