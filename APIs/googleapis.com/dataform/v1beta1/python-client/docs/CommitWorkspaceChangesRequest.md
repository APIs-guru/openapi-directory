# CommitWorkspaceChangesRequest

`CommitWorkspaceChanges` request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**CommitAuthor**](CommitAuthor.md) |  | [optional] 
**commit_message** | **str** | Optional. The commit&#39;s message. | [optional] 
**paths** | **List[str]** | Optional. Full file paths to commit including filename, rooted at workspace root. If left empty, all files will be committed. | [optional] 

## Example

```python
from openapi_client.models.commit_workspace_changes_request import CommitWorkspaceChangesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommitWorkspaceChangesRequest from a JSON string
commit_workspace_changes_request_instance = CommitWorkspaceChangesRequest.from_json(json)
# print the JSON string representation of the object
print(CommitWorkspaceChangesRequest.to_json())

# convert the object into a dict
commit_workspace_changes_request_dict = commit_workspace_changes_request_instance.to_dict()
# create an instance of CommitWorkspaceChangesRequest from a dict
commit_workspace_changes_request_from_dict = CommitWorkspaceChangesRequest.from_dict(commit_workspace_changes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


