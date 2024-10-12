# IdentityServiceAuthMethod

Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azuread_config** | [**IdentityServiceAzureADConfig**](IdentityServiceAzureADConfig.md) |  | [optional] 
**google_config** | [**IdentityServiceGoogleConfig**](IdentityServiceGoogleConfig.md) |  | [optional] 
**name** | **str** | Identifier for auth config. | [optional] 
**oidc_config** | [**IdentityServiceOidcConfig**](IdentityServiceOidcConfig.md) |  | [optional] 
**proxy** | **str** | Proxy server address to use for auth method. | [optional] 

## Example

```python
from openapi_client.models.identity_service_auth_method import IdentityServiceAuthMethod

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityServiceAuthMethod from a JSON string
identity_service_auth_method_instance = IdentityServiceAuthMethod.from_json(json)
# print the JSON string representation of the object
print(IdentityServiceAuthMethod.to_json())

# convert the object into a dict
identity_service_auth_method_dict = identity_service_auth_method_instance.to_dict()
# create an instance of IdentityServiceAuthMethod from a dict
identity_service_auth_method_from_dict = IdentityServiceAuthMethod.from_dict(identity_service_auth_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


