# WorkspaceListResult

Values returned by the List operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token. | [optional] [readonly] 
**value** | [**List[Workspace]**](Workspace.md) | The collection of workspaces. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workspace_list_result import WorkspaceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceListResult from a JSON string
workspace_list_result_instance = WorkspaceListResult.from_json(json)
# print the JSON string representation of the object
print(WorkspaceListResult.to_json())

# convert the object into a dict
workspace_list_result_dict = workspace_list_result_instance.to_dict()
# create an instance of WorkspaceListResult from a dict
workspace_list_result_from_dict = WorkspaceListResult.from_dict(workspace_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


