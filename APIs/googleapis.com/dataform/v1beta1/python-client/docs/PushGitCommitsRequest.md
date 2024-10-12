# PushGitCommitsRequest

`PushGitCommits` request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_branch** | **str** | Optional. The name of the branch in the Git remote to which commits should be pushed. If left unset, the repository&#39;s default branch name will be used. | [optional] 

## Example

```python
from openapi_client.models.push_git_commits_request import PushGitCommitsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PushGitCommitsRequest from a JSON string
push_git_commits_request_instance = PushGitCommitsRequest.from_json(json)
# print the JSON string representation of the object
print(PushGitCommitsRequest.to_json())

# convert the object into a dict
push_git_commits_request_dict = push_git_commits_request_instance.to_dict()
# create an instance of PushGitCommitsRequest from a dict
push_git_commits_request_from_dict = PushGitCommitsRequest.from_dict(push_git_commits_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


