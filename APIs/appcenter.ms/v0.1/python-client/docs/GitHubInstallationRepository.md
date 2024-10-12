# GitHubInstallationRepository

The repository which is accessiable by GitHub App Installation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clone_url** | **str** | URL used to clone the repository | [optional] 
**default_branch** | **str** | The default branch for the repo | [optional] 
**description** | **str** | The discription of repository | [optional] 
**fork** | **bool** | Whether the repository is a fork | [optional] 
**language** | **str** | The language in the repository | [optional] 
**name** | **str** | The repository name | [optional] 
**updated_at** | **str** | The repository updated time | [optional] 

## Example

```python
from openapi_client.models.git_hub_installation_repository import GitHubInstallationRepository

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubInstallationRepository from a JSON string
git_hub_installation_repository_instance = GitHubInstallationRepository.from_json(json)
# print the JSON string representation of the object
print(GitHubInstallationRepository.to_json())

# convert the object into a dict
git_hub_installation_repository_dict = git_hub_installation_repository_instance.to_dict()
# create an instance of GitHubInstallationRepository from a dict
git_hub_installation_repository_from_dict = GitHubInstallationRepository.from_dict(git_hub_installation_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


