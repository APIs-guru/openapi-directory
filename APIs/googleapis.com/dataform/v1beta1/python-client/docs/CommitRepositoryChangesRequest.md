# CommitRepositoryChangesRequest

`CommitRepositoryChanges` request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_metadata** | [**CommitMetadata**](CommitMetadata.md) |  | [optional] 
**file_operations** | [**Dict[str, FileOperation]**](FileOperation.md) | A map to the path of the file to the operation. The path is the full file path including filename, from repository root. | [optional] 
**required_head_commit_sha** | **str** | Optional. The commit SHA which must be the repository&#39;s current HEAD before applying this commit; otherwise this request will fail. If unset, no validation on the current HEAD commit SHA is performed. | [optional] 

## Example

```python
from openapi_client.models.commit_repository_changes_request import CommitRepositoryChangesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommitRepositoryChangesRequest from a JSON string
commit_repository_changes_request_instance = CommitRepositoryChangesRequest.from_json(json)
# print the JSON string representation of the object
print(CommitRepositoryChangesRequest.to_json())

# convert the object into a dict
commit_repository_changes_request_dict = commit_repository_changes_request_instance.to_dict()
# create an instance of CommitRepositoryChangesRequest from a dict
commit_repository_changes_request_from_dict = CommitRepositoryChangesRequest.from_dict(commit_repository_changes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


