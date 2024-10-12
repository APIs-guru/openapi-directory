# GitHubPullRequestLiteBase

The lite version of GitHub branch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ref** | **str** | The repository name | [optional] 
**repo** | [**GitHubBranchLiteRepo**](GitHubBranchLiteRepo.md) |  | [optional] 
**sha** | **str** | The discription of repository | [optional] 

## Example

```python
from openapi_client.models.git_hub_pull_request_lite_base import GitHubPullRequestLiteBase

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubPullRequestLiteBase from a JSON string
git_hub_pull_request_lite_base_instance = GitHubPullRequestLiteBase.from_json(json)
# print the JSON string representation of the object
print(GitHubPullRequestLiteBase.to_json())

# convert the object into a dict
git_hub_pull_request_lite_base_dict = git_hub_pull_request_lite_base_instance.to_dict()
# create an instance of GitHubPullRequestLiteBase from a dict
git_hub_pull_request_lite_base_from_dict = GitHubPullRequestLiteBase.from_dict(git_hub_pull_request_lite_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


