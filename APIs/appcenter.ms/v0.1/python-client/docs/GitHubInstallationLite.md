# GitHubInstallationLite

The GitHub Installation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**GitHubInstallationLiteAccount**](GitHubInstallationLiteAccount.md) |  | [optional] 
**app_id** | **float** | GitHub Installation App Id | [optional] 
**id** | **float** | GitHub Installation Id | [optional] 

## Example

```python
from openapi_client.models.git_hub_installation_lite import GitHubInstallationLite

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubInstallationLite from a JSON string
git_hub_installation_lite_instance = GitHubInstallationLite.from_json(json)
# print the JSON string representation of the object
print(GitHubInstallationLite.to_json())

# convert the object into a dict
git_hub_installation_lite_dict = git_hub_installation_lite_instance.to_dict()
# create an instance of GitHubInstallationLite from a dict
git_hub_installation_lite_from_dict = GitHubInstallationLite.from_dict(git_hub_installation_lite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


