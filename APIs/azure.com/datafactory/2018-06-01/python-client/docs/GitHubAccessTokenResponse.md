# GitHubAccessTokenResponse

Get GitHub access token response definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**git_hub_access_token** | **str** | GitHub access token. | [optional] 

## Example

```python
from openapi_client.models.git_hub_access_token_response import GitHubAccessTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubAccessTokenResponse from a JSON string
git_hub_access_token_response_instance = GitHubAccessTokenResponse.from_json(json)
# print the JSON string representation of the object
print(GitHubAccessTokenResponse.to_json())

# convert the object into a dict
git_hub_access_token_response_dict = git_hub_access_token_response_instance.to_dict()
# create an instance of GitHubAccessTokenResponse from a dict
git_hub_access_token_response_from_dict = GitHubAccessTokenResponse.from_dict(git_hub_access_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


