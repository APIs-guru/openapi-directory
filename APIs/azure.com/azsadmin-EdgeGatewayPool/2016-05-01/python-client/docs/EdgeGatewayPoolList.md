# EdgeGatewayPoolList

A pageable list of edge gateway pools objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to the next page. | [optional] 
**value** | [**List[EdgeGatewayPool]**](EdgeGatewayPool.md) | List of edge gateway pool objects. | [optional] 

## Example

```python
from openapi_client.models.edge_gateway_pool_list import EdgeGatewayPoolList

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeGatewayPoolList from a JSON string
edge_gateway_pool_list_instance = EdgeGatewayPoolList.from_json(json)
# print the JSON string representation of the object
print(EdgeGatewayPoolList.to_json())

# convert the object into a dict
edge_gateway_pool_list_dict = edge_gateway_pool_list_instance.to_dict()
# create an instance of EdgeGatewayPoolList from a dict
edge_gateway_pool_list_from_dict = EdgeGatewayPoolList.from_dict(edge_gateway_pool_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


