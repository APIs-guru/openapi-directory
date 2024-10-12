# WorkspaceReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaces** | [**List[WorkspaceRead]**](WorkspaceRead.md) |  | 

## Example

```python
from openapi_client.models.workspace_read_list import WorkspaceReadList

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceReadList from a JSON string
workspace_read_list_instance = WorkspaceReadList.from_json(json)
# print the JSON string representation of the object
print(WorkspaceReadList.to_json())

# convert the object into a dict
workspace_read_list_dict = workspace_read_list_instance.to_dict()
# create an instance of WorkspaceReadList from a dict
workspace_read_list_from_dict = WorkspaceReadList.from_dict(workspace_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


