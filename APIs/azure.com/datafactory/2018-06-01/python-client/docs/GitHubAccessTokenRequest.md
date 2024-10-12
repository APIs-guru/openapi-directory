# GitHubAccessTokenRequest

Get GitHub access token request definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**git_hub_access_code** | **str** | GitHub access code. | 
**git_hub_access_token_base_url** | **str** | GitHub access token base URL. | 
**git_hub_client_id** | **str** | GitHub application client ID. | [optional] 

## Example

```python
from openapi_client.models.git_hub_access_token_request import GitHubAccessTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubAccessTokenRequest from a JSON string
git_hub_access_token_request_instance = GitHubAccessTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GitHubAccessTokenRequest.to_json())

# convert the object into a dict
git_hub_access_token_request_dict = git_hub_access_token_request_instance.to_dict()
# create an instance of GitHubAccessTokenRequest from a dict
git_hub_access_token_request_from_dict = GitHubAccessTokenRequest.from_dict(git_hub_access_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


