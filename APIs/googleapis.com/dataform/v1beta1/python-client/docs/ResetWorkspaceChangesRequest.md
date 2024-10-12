# ResetWorkspaceChangesRequest

`ResetWorkspaceChanges` request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clean** | **bool** | Optional. If set to true, untracked files will be deleted. | [optional] 
**paths** | **List[str]** | Optional. Full file paths to reset back to their committed state including filename, rooted at workspace root. If left empty, all files will be reset. | [optional] 

## Example

```python
from openapi_client.models.reset_workspace_changes_request import ResetWorkspaceChangesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResetWorkspaceChangesRequest from a JSON string
reset_workspace_changes_request_instance = ResetWorkspaceChangesRequest.from_json(json)
# print the JSON string representation of the object
print(ResetWorkspaceChangesRequest.to_json())

# convert the object into a dict
reset_workspace_changes_request_dict = reset_workspace_changes_request_instance.to_dict()
# create an instance of ResetWorkspaceChangesRequest from a dict
reset_workspace_changes_request_from_dict = ResetWorkspaceChangesRequest.from_dict(reset_workspace_changes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


