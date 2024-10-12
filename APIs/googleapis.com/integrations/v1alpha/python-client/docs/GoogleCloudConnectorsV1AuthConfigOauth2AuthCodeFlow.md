# GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow

Parameters to support Oauth 2.0 Auth Code Grant Authentication. See https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1 for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_code** | **str** | Authorization code to be exchanged for access and refresh tokens. | [optional] 
**auth_uri** | **str** | Auth URL for Authorization Code Flow | [optional] 
**client_id** | **str** | Client ID for user-provided OAuth app. | [optional] 
**client_secret** | [**GoogleCloudConnectorsV1Secret**](GoogleCloudConnectorsV1Secret.md) |  | [optional] 
**enable_pkce** | **bool** | Whether to enable PKCE when the user performs the auth code flow. | [optional] 
**pkce_verifier** | **str** | PKCE verifier to be used during the auth code exchange. | [optional] 
**redirect_uri** | **str** | Redirect URI to be provided during the auth code exchange. | [optional] 
**scopes** | **List[str]** | Scopes the connection will request when the user performs the auth code flow. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_auth_config_oauth2_auth_code_flow import GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow from a JSON string
google_cloud_connectors_v1_auth_config_oauth2_auth_code_flow_instance = GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow.to_json())

# convert the object into a dict
google_cloud_connectors_v1_auth_config_oauth2_auth_code_flow_dict = google_cloud_connectors_v1_auth_config_oauth2_auth_code_flow_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow from a dict
google_cloud_connectors_v1_auth_config_oauth2_auth_code_flow_from_dict = GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow.from_dict(google_cloud_connectors_v1_auth_config_oauth2_auth_code_flow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


