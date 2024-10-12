# RepositoryConfigurationsCreateOrUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installation_id** | **str** | The GitHub App Installation id. Required for repositories connected from GitHub App | [optional] 
**external_user_id** | **str** | The external user id from the repository provider. Required for GitLab.com repositories | [optional] 
**repo_id** | **str** | The repository id from the repository provider. Required for repositories connected from GitHub App and GitLab.com | [optional] 
**repo_url** | **str** | The repository&#39;s git url, must be a HTTPS URL | 
**service_connection_id** | **str** | The id of the service connection (private). Required for GitLab self-hosted repositories | [optional] 

## Example

```python
from openapi_client.models.repository_configurations_create_or_update_request import RepositoryConfigurationsCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RepositoryConfigurationsCreateOrUpdateRequest from a JSON string
repository_configurations_create_or_update_request_instance = RepositoryConfigurationsCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(RepositoryConfigurationsCreateOrUpdateRequest.to_json())

# convert the object into a dict
repository_configurations_create_or_update_request_dict = repository_configurations_create_or_update_request_instance.to_dict()
# create an instance of RepositoryConfigurationsCreateOrUpdateRequest from a dict
repository_configurations_create_or_update_request_from_dict = RepositoryConfigurationsCreateOrUpdateRequest.from_dict(repository_configurations_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


