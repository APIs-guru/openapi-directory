# FetchGitAheadBehindResponse

`FetchGitAheadBehind` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commits_ahead** | **int** | The number of commits in the remote branch that are not in the workspace. | [optional] 
**commits_behind** | **int** | The number of commits in the workspace that are not in the remote branch. | [optional] 

## Example

```python
from openapi_client.models.fetch_git_ahead_behind_response import FetchGitAheadBehindResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchGitAheadBehindResponse from a JSON string
fetch_git_ahead_behind_response_instance = FetchGitAheadBehindResponse.from_json(json)
# print the JSON string representation of the object
print(FetchGitAheadBehindResponse.to_json())

# convert the object into a dict
fetch_git_ahead_behind_response_dict = fetch_git_ahead_behind_response_instance.to_dict()
# create an instance of FetchGitAheadBehindResponse from a dict
fetch_git_ahead_behind_response_from_dict = FetchGitAheadBehindResponse.from_dict(fetch_git_ahead_behind_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


