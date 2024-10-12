# GitHubAccountLite

The GitHub Installation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | GitHub Account Id | [optional] 
**login** | **str** | GitHub Account Login Name | [optional] 
**type** | **str** | GitHub Account Type | [optional] 
**url** | **str** | GitHub Account Url | [optional] 

## Example

```python
from openapi_client.models.git_hub_account_lite import GitHubAccountLite

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubAccountLite from a JSON string
git_hub_account_lite_instance = GitHubAccountLite.from_json(json)
# print the JSON string representation of the object
print(GitHubAccountLite.to_json())

# convert the object into a dict
git_hub_account_lite_dict = git_hub_account_lite_instance.to_dict()
# create an instance of GitHubAccountLite from a dict
git_hub_account_lite_from_dict = GitHubAccountLite.from_dict(git_hub_account_lite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


