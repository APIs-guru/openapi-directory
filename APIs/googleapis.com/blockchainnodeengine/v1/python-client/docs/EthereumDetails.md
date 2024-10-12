# EthereumDetails

Ethereum-specific blockchain node details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_endpoints** | [**EthereumEndpoints**](EthereumEndpoints.md) |  | [optional] 
**api_enable_admin** | **bool** | Immutable. Enables JSON-RPC access to functions in the &#x60;admin&#x60; namespace. Defaults to &#x60;false&#x60;. | [optional] 
**api_enable_debug** | **bool** | Immutable. Enables JSON-RPC access to functions in the &#x60;debug&#x60; namespace. Defaults to &#x60;false&#x60;. | [optional] 
**consensus_client** | **str** | Immutable. The consensus client. | [optional] 
**execution_client** | **str** | Immutable. The execution client | [optional] 
**geth_details** | [**GethDetails**](GethDetails.md) |  | [optional] 
**network** | **str** | Immutable. The Ethereum environment being accessed. | [optional] 
**node_type** | **str** | Immutable. The type of Ethereum node. | [optional] 
**validator_config** | [**ValidatorConfig**](ValidatorConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.ethereum_details import EthereumDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EthereumDetails from a JSON string
ethereum_details_instance = EthereumDetails.from_json(json)
# print the JSON string representation of the object
print(EthereumDetails.to_json())

# convert the object into a dict
ethereum_details_dict = ethereum_details_instance.to_dict()
# create an instance of EthereumDetails from a dict
ethereum_details_from_dict = EthereumDetails.from_dict(ethereum_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


