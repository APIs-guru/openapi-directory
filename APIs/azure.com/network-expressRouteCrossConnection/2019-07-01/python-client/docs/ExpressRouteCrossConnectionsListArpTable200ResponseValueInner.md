# ExpressRouteCrossConnectionsListArpTable200ResponseValueInner

The ARP table associated with the ExpressRouteCircuit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age** | **int** | Entry age in minutes. | [optional] 
**interface** | **str** | Interface address. | [optional] 
**ip_address** | **str** | The IP address. | [optional] 
**mac_address** | **str** | The MAC address. | [optional] 

## Example

```python
from openapi_client.models.express_route_cross_connections_list_arp_table200_response_value_inner import ExpressRouteCrossConnectionsListArpTable200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCrossConnectionsListArpTable200ResponseValueInner from a JSON string
express_route_cross_connections_list_arp_table200_response_value_inner_instance = ExpressRouteCrossConnectionsListArpTable200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCrossConnectionsListArpTable200ResponseValueInner.to_json())

# convert the object into a dict
express_route_cross_connections_list_arp_table200_response_value_inner_dict = express_route_cross_connections_list_arp_table200_response_value_inner_instance.to_dict()
# create an instance of ExpressRouteCrossConnectionsListArpTable200ResponseValueInner from a dict
express_route_cross_connections_list_arp_table200_response_value_inner_from_dict = ExpressRouteCrossConnectionsListArpTable200ResponseValueInner.from_dict(express_route_cross_connections_list_arp_table200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


