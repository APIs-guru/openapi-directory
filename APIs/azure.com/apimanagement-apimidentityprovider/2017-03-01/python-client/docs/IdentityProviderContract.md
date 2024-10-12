# IdentityProviderContract

Identity Provider details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IdentityProviderContractProperties**](IdentityProviderContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.identity_provider_contract import IdentityProviderContract

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderContract from a JSON string
identity_provider_contract_instance = IdentityProviderContract.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderContract.to_json())

# convert the object into a dict
identity_provider_contract_dict = identity_provider_contract_instance.to_dict()
# create an instance of IdentityProviderContract from a dict
identity_provider_contract_from_dict = IdentityProviderContract.from_dict(identity_provider_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


