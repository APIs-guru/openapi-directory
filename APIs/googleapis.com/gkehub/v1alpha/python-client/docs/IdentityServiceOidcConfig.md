# IdentityServiceOidcConfig

Configuration for OIDC Auth flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_authority_data** | **str** | PEM-encoded CA for OIDC provider. | [optional] 
**client_id** | **str** | ID for OIDC client application. | [optional] 
**client_secret** | **str** | Input only. Unencrypted OIDC client secret will be passed to the GKE Hub CLH. | [optional] 
**deploy_cloud_console_proxy** | **bool** | Flag to denote if reverse proxy is used to connect to auth provider. This flag should be set to true when provider is not reachable by Google Cloud Console. | [optional] 
**enable_access_token** | **bool** | Enable access token. | [optional] 
**encrypted_client_secret** | **bytearray** | Output only. Encrypted OIDC Client secret | [optional] [readonly] 
**extra_params** | **str** | Comma-separated list of key-value pairs. | [optional] 
**group_prefix** | **str** | Prefix to prepend to group name. | [optional] 
**groups_claim** | **str** | Claim in OIDC ID token that holds group information. | [optional] 
**issuer_uri** | **str** | URI for the OIDC provider. This should point to the level below .well-known/openid-configuration. | [optional] 
**kubectl_redirect_uri** | **str** | Registered redirect uri to redirect users going through OAuth flow using kubectl plugin. | [optional] 
**scopes** | **str** | Comma-separated list of identifiers. | [optional] 
**user_claim** | **str** | Claim in OIDC ID token that holds username. | [optional] 
**user_prefix** | **str** | Prefix to prepend to user name. | [optional] 

## Example

```python
from openapi_client.models.identity_service_oidc_config import IdentityServiceOidcConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityServiceOidcConfig from a JSON string
identity_service_oidc_config_instance = IdentityServiceOidcConfig.from_json(json)
# print the JSON string representation of the object
print(IdentityServiceOidcConfig.to_json())

# convert the object into a dict
identity_service_oidc_config_dict = identity_service_oidc_config_instance.to_dict()
# create an instance of IdentityServiceOidcConfig from a dict
identity_service_oidc_config_from_dict = IdentityServiceOidcConfig.from_dict(identity_service_oidc_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


