# EdgeGatewayList

Pageable list of edge gateways.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[EdgeGateway]**](EdgeGateway.md) | List of edge gateways. | [optional] 

## Example

```python
from openapi_client.models.edge_gateway_list import EdgeGatewayList

# TODO update the JSON string below
json = "{}"
# create an instance of EdgeGatewayList from a JSON string
edge_gateway_list_instance = EdgeGatewayList.from_json(json)
# print the JSON string representation of the object
print(EdgeGatewayList.to_json())

# convert the object into a dict
edge_gateway_list_dict = edge_gateway_list_instance.to_dict()
# create an instance of EdgeGatewayList from a dict
edge_gateway_list_from_dict = EdgeGatewayList.from_dict(edge_gateway_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


