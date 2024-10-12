# IdentityProviderBaseParameters

Identity Provider Base Parameter Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_tenants** | **List[str]** | List of Allowed Tenants when configuring Azure Active Directory login. | [optional] 
**password_reset_policy_name** | **str** | Password Reset Policy Name. Only applies to AAD B2C Identity Provider. | [optional] 
**profile_editing_policy_name** | **str** | Profile Editing Policy Name. Only applies to AAD B2C Identity Provider. | [optional] 
**signin_policy_name** | **str** | Signin Policy Name. Only applies to AAD B2C Identity Provider. | [optional] 
**signup_policy_name** | **str** | Signup Policy Name. Only applies to AAD B2C Identity Provider. | [optional] 
**type** | **str** | Identity Provider Type identifier. | [optional] 

## Example

```python
from openapi_client.models.identity_provider_base_parameters import IdentityProviderBaseParameters

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderBaseParameters from a JSON string
identity_provider_base_parameters_instance = IdentityProviderBaseParameters.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderBaseParameters.to_json())

# convert the object into a dict
identity_provider_base_parameters_dict = identity_provider_base_parameters_instance.to_dict()
# create an instance of IdentityProviderBaseParameters from a dict
identity_provider_base_parameters_from_dict = IdentityProviderBaseParameters.from_dict(identity_provider_base_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


