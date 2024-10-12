# GitHubPullRequestLite

The lite version of GitHub pull request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base** | [**GitHubPullRequestLiteBase**](GitHubPullRequestLiteBase.md) |  | [optional] 
**head** | [**GitHubPullRequestLiteBase**](GitHubPullRequestLiteBase.md) |  | [optional] 

## Example

```python
from openapi_client.models.git_hub_pull_request_lite import GitHubPullRequestLite

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubPullRequestLite from a JSON string
git_hub_pull_request_lite_instance = GitHubPullRequestLite.from_json(json)
# print the JSON string representation of the object
print(GitHubPullRequestLite.to_json())

# convert the object into a dict
git_hub_pull_request_lite_dict = git_hub_pull_request_lite_instance.to_dict()
# create an instance of GitHubPullRequestLite from a dict
git_hub_pull_request_lite_from_dict = GitHubPullRequestLite.from_dict(git_hub_pull_request_lite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


