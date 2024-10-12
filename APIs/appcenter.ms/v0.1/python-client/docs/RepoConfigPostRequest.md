# RepoConfigPostRequest


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
from openapi_client.models.repo_config_post_request import RepoConfigPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RepoConfigPostRequest from a JSON string
repo_config_post_request_instance = RepoConfigPostRequest.from_json(json)
# print the JSON string representation of the object
print(RepoConfigPostRequest.to_json())

# convert the object into a dict
repo_config_post_request_dict = repo_config_post_request_instance.to_dict()
# create an instance of RepoConfigPostRequest from a dict
repo_config_post_request_from_dict = RepoConfigPostRequest.from_dict(repo_config_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


