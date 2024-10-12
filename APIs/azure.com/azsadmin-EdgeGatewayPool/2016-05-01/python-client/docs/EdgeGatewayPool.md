# EdgeGatewayPool

This object represents an edge gateway pool, which contains a list of gateways.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EdgeGatewayPoolModel**](EdgeGatewayPoolModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.edge_gateway_pool import EdgeGatewayPool

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeGatewayPool from a JSON string
edge_gateway_pool_instance = EdgeGatewayPool.from_json(json)
# print the JSON string representation of the object
print(EdgeGatewayPool.to_json())

# convert the object into a dict
edge_gateway_pool_dict = edge_gateway_pool_instance.to_dict()
# create an instance of EdgeGatewayPool from a dict
edge_gateway_pool_from_dict = EdgeGatewayPool.from_dict(edge_gateway_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


