# GitHubInstallationLiteAccount

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
from openapi_client.models.git_hub_installation_lite_account import GitHubInstallationLiteAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubInstallationLiteAccount from a JSON string
git_hub_installation_lite_account_instance = GitHubInstallationLiteAccount.from_json(json)
# print the JSON string representation of the object
print(GitHubInstallationLiteAccount.to_json())

# convert the object into a dict
git_hub_installation_lite_account_dict = git_hub_installation_lite_account_instance.to_dict()
# create an instance of GitHubInstallationLiteAccount from a dict
git_hub_installation_lite_account_from_dict = GitHubInstallationLiteAccount.from_dict(git_hub_installation_lite_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


