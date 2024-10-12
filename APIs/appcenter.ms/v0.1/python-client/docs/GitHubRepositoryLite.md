# GitHubRepositoryLite

The lite version of GitHub repository

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** | The repository id | [optional] 

## Example

```python
from openapi_client.models.git_hub_repository_lite import GitHubRepositoryLite

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubRepositoryLite from a JSON string
git_hub_repository_lite_instance = GitHubRepositoryLite.from_json(json)
# print the JSON string representation of the object
print(GitHubRepositoryLite.to_json())

# convert the object into a dict
git_hub_repository_lite_dict = git_hub_repository_lite_instance.to_dict()
# create an instance of GitHubRepositoryLite from a dict
git_hub_repository_lite_from_dict = GitHubRepositoryLite.from_dict(git_hub_repository_lite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


