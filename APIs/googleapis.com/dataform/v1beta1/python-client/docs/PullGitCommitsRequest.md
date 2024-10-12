# PullGitCommitsRequest

`PullGitCommits` request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**CommitAuthor**](CommitAuthor.md) |  | [optional] 
**remote_branch** | **str** | Optional. The name of the branch in the Git remote from which to pull commits. If left unset, the repository&#39;s default branch name will be used. | [optional] 

## Example

```python
from openapi_client.models.pull_git_commits_request import PullGitCommitsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PullGitCommitsRequest from a JSON string
pull_git_commits_request_instance = PullGitCommitsRequest.from_json(json)
# print the JSON string representation of the object
print(PullGitCommitsRequest.to_json())

# convert the object into a dict
pull_git_commits_request_dict = pull_git_commits_request_instance.to_dict()
# create an instance of PullGitCommitsRequest from a dict
pull_git_commits_request_from_dict = PullGitCommitsRequest.from_dict(pull_git_commits_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


