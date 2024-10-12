# OauthTokenPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID, obtained during app registration | 
**client_secret** | **str** | Client secret, obtained during app registration | 
**code** | **str** | A user authorization code, obtained via /oauth/authorize | [optional] 
**grant_type** | **str** | Set equal to authorization_code if code is provided in order to gain user-level access. Otherwise, set equal to client_credentials to obtain app-level access only. | 
**redirect_uri** | **str** | Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the token will be shown instead. Must match one of the redirect URIs declared during app registration. | 
**scopes** | **str** | List of requested OAuth scopes, separated by spaces. Must be a subset of scopes declared during app registration. If not provided, defaults to read. | [optional] 

## Example

```python
from openapi_client.models.oauth_token_post_request import OauthTokenPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OauthTokenPostRequest from a JSON string
oauth_token_post_request_instance = OauthTokenPostRequest.from_json(json)
# print the JSON string representation of the object
print(OauthTokenPostRequest.to_json())

# convert the object into a dict
oauth_token_post_request_dict = oauth_token_post_request_instance.to_dict()
# create an instance of OauthTokenPostRequest from a dict
oauth_token_post_request_from_dict = OauthTokenPostRequest.from_dict(oauth_token_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


