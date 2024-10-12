# IdentityProviderContractProperties

The external Identity Providers like Facebook, Google, Microsoft, Twitter or Azure Active Directory which can be used to enable access to the API Management service developer portal for all users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client Id of the Application in the external Identity Provider. It is App ID for Facebook login, Client ID for Google login, App ID for Microsoft. | 
**client_secret** | **str** | Client secret of the Application in external Identity Provider, used to authenticate login request. For example, it is App Secret for Facebook login, API Key for Google login, Public Key for Microsoft. | 
**allowed_tenants** | **List[str]** | List of Allowed Tenants when configuring Azure Active Directory login. | [optional] 
**password_reset_policy_name** | **str** | Password Reset Policy Name. Only applies to AAD B2C Identity Provider. | [optional] 
**profile_editing_policy_name** | **str** | Profile Editing Policy Name. Only applies to AAD B2C Identity Provider. | [optional] 
**signin_policy_name** | **str** | Signin Policy Name. Only applies to AAD B2C Identity Provider. | [optional] 
**signup_policy_name** | **str** | Signup Policy Name. Only applies to AAD B2C Identity Provider. | [optional] 
**type** | **str** | Identity Provider Type identifier. | [optional] 

## Example

```python
from openapi_client.models.identity_provider_contract_properties import IdentityProviderContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderContractProperties from a JSON string
identity_provider_contract_properties_instance = IdentityProviderContractProperties.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderContractProperties.to_json())

# convert the object into a dict
identity_provider_contract_properties_dict = identity_provider_contract_properties_instance.to_dict()
# create an instance of IdentityProviderContractProperties from a dict
identity_provider_contract_properties_from_dict = IdentityProviderContractProperties.from_dict(identity_provider_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


