# AuthorizationServerUpdateContract

External OAuth authorization server settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AuthorizationServerUpdateContractProperties**](AuthorizationServerUpdateContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.authorization_server_update_contract import AuthorizationServerUpdateContract

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationServerUpdateContract from a JSON string
authorization_server_update_contract_instance = AuthorizationServerUpdateContract.from_json(json)
# print the JSON string representation of the object
print(AuthorizationServerUpdateContract.to_json())

# convert the object into a dict
authorization_server_update_contract_dict = authorization_server_update_contract_instance.to_dict()
# create an instance of AuthorizationServerUpdateContract from a dict
authorization_server_update_contract_from_dict = AuthorizationServerUpdateContract.from_dict(authorization_server_update_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


