# EdgeGatewayPoolModel

An object that contains the properties of an edge gateway pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edge_gateways** | **List[str]** | List of the edge gateways in the pool. | [optional] 
**gateway_capacity_kilo_bits_per_second** | **int** | Gateway capacity in kilobits per second. | [optional] 
**gateway_type** | **str** | The gateway type, for example, S2sIPsec, S2sGre, and so on. | [optional] 
**gre_vip_subnet** | **str** | The GRE VIP subnet. | [optional] 
**number_of_gateways** | **int** | The number of gateways in the pool. | [optional] 
**public_ip_address** | **str** | The public IP address. | [optional] 
**redundant_gateway_count** | **int** | The number of redundant gateways. | [optional] 

## Example

```python
from openapi_client.models.edge_gateway_pool_model import EdgeGatewayPoolModel

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeGatewayPoolModel from a JSON string
edge_gateway_pool_model_instance = EdgeGatewayPoolModel.from_json(json)
# print the JSON string representation of the object
print(EdgeGatewayPoolModel.to_json())

# convert the object into a dict
edge_gateway_pool_model_dict = edge_gateway_pool_model_instance.to_dict()
# create an instance of EdgeGatewayPoolModel from a dict
edge_gateway_pool_model_from_dict = EdgeGatewayPoolModel.from_dict(edge_gateway_pool_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


