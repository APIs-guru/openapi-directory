# GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig

Configuration options for authenticating with an OAuth IDP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client id of an OAuth client. | [optional] 
**client_secret** | **str** | The client secret of the OAuth client, to enable OIDC code flow. | [optional] 
**display_name** | **str** | The config&#39;s display name set by developers. | [optional] 
**enabled** | **bool** | True if allows the user to sign in with the provider. | [optional] 
**issuer** | **str** | For OIDC Idps, the issuer identifier. | [optional] 
**name** | **str** | The name of the OAuthIdpConfig resource, for example: &#39;projects/my-awesome-project/oauthIdpConfigs/oauth-config-id&#39;. Ignored during create requests. | [optional] 
**response_type** | [**GoogleCloudIdentitytoolkitAdminV2OAuthResponseType**](GoogleCloudIdentitytoolkitAdminV2OAuthResponseType.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_o_auth_idp_config import GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_o_auth_idp_config_instance = GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_o_auth_idp_config_dict = google_cloud_identitytoolkit_admin_v2_o_auth_idp_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig from a dict
google_cloud_identitytoolkit_admin_v2_o_auth_idp_config_from_dict = GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.from_dict(google_cloud_identitytoolkit_admin_v2_o_auth_idp_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


