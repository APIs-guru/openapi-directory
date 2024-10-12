# GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode

The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | [**GoogleCloudIntegrationsV1alphaAccessToken**](GoogleCloudIntegrationsV1alphaAccessToken.md) |  | [optional] 
**apply_reauth_policy** | **bool** | Indicates if the user has opted in Google Reauth Policy. If opted in, the refresh token will be valid for 20 hours, after which time users must re-authenticate in order to obtain a new one. | [optional] 
**auth_code** | **str** | The Auth Code that is used to initially retrieve the access token. | [optional] 
**auth_endpoint** | **str** | The auth url endpoint to send the auth code request to. | [optional] 
**auth_params** | [**GoogleCloudIntegrationsV1alphaParameterMap**](GoogleCloudIntegrationsV1alphaParameterMap.md) |  | [optional] 
**client_id** | **str** | The client&#39;s id. | [optional] 
**client_secret** | **str** | The client&#39;s secret. | [optional] 
**request_type** | **str** | Represent how to pass parameters to fetch access token | [optional] 
**scope** | **str** | A space-delimited list of requested scope permissions. | [optional] 
**token_endpoint** | **str** | The token url endpoint to send the token request to. | [optional] 
**token_params** | [**GoogleCloudIntegrationsV1alphaParameterMap**](GoogleCloudIntegrationsV1alphaParameterMap.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_o_auth2_authorization_code import GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode from a JSON string
google_cloud_integrations_v1alpha_o_auth2_authorization_code_instance = GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_o_auth2_authorization_code_dict = google_cloud_integrations_v1alpha_o_auth2_authorization_code_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode from a dict
google_cloud_integrations_v1alpha_o_auth2_authorization_code_from_dict = GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.from_dict(google_cloud_integrations_v1alpha_o_auth2_authorization_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


