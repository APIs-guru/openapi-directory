# VirtualNetworkGatewayConnectionListResult

Response for the ListVirtualNetworkGatewayConnections API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[VirtualNetworkGatewayConnection]**](VirtualNetworkGatewayConnection.md) | Gets a list of VirtualNetworkGatewayConnection resources that exists in a resource group. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_gateway_connection_list_result import VirtualNetworkGatewayConnectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewayConnectionListResult from a JSON string
virtual_network_gateway_connection_list_result_instance = VirtualNetworkGatewayConnectionListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewayConnectionListResult.to_json())

# convert the object into a dict
virtual_network_gateway_connection_list_result_dict = virtual_network_gateway_connection_list_result_instance.to_dict()
# create an instance of VirtualNetworkGatewayConnectionListResult from a dict
virtual_network_gateway_connection_list_result_from_dict = VirtualNetworkGatewayConnectionListResult.from_dict(virtual_network_gateway_connection_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


