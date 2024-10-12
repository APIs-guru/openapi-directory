# AuthorizationServerContract

External OAuth authorization server settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AuthorizationServerContractProperties**](AuthorizationServerContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.authorization_server_contract import AuthorizationServerContract

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerContract from a JSON string
authorization_server_contract_instance = AuthorizationServerContract.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerContract.to_json())

# convert the object into a dict
authorization_server_contract_dict = authorization_server_contract_instance.to_dict()
# create an instance of AuthorizationServerContract from a dict
authorization_server_contract_from_dict = AuthorizationServerContract.from_dict(authorization_server_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


