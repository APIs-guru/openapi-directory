# TykOauthAuthorizeClientPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | [optional] 
**code** | **str** |  | [optional] 
**expires_in** | **float** |  | [optional] 
**redirect_to** | **str** |  | [optional] 
**token_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tyk_oauth_authorize_client_post200_response import TykOauthAuthorizeClientPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TykOauthAuthorizeClientPost200Response from a JSON string
tyk_oauth_authorize_client_post200_response_instance = TykOauthAuthorizeClientPost200Response.from_json(json)
# print the JSON string representation of the object
print(TykOauthAuthorizeClientPost200Response.to_json())

# convert the object into a dict
tyk_oauth_authorize_client_post200_response_dict = tyk_oauth_authorize_client_post200_response_instance.to_dict()
# create an instance of TykOauthAuthorizeClientPost200Response from a dict
tyk_oauth_authorize_client_post200_response_from_dict = TykOauthAuthorizeClientPost200Response.from_dict(tyk_oauth_authorize_client_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


