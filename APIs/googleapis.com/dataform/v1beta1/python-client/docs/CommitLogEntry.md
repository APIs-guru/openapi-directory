# CommitLogEntry

Represents a single commit log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**CommitAuthor**](CommitAuthor.md) |  | [optional] 
**commit_message** | **str** | The commit message for this commit log entry. | [optional] 
**commit_sha** | **str** | The commit SHA for this commit log entry. | [optional] 
**commit_time** | **str** | Commit timestamp. | [optional] 

## Example

```python
from openapi_client.models.commit_log_entry import CommitLogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of CommitLogEntry from a JSON string
commit_log_entry_instance = CommitLogEntry.from_json(json)
# print the JSON string representation of the object
print(CommitLogEntry.to_json())

# convert the object into a dict
commit_log_entry_dict = commit_log_entry_instance.to_dict()
# create an instance of CommitLogEntry from a dict
commit_log_entry_from_dict = CommitLogEntry.from_dict(commit_log_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


