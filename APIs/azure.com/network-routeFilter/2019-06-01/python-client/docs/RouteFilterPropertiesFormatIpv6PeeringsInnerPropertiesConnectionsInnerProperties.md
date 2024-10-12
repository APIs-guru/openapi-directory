# RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerProperties

Properties of the express route circuit connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | /29 IP address space to carve out Customer addresses for tunnels. | [optional] 
**authorization_key** | **str** | The authorization key. | [optional] 
**circuit_connection_status** | **str** | Express Route Circuit connection state. | [optional] [readonly] 
**express_route_circuit_peering** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering.md) |  | [optional] 
**peer_express_route_circuit_peering** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the circuit connection resource. Possible values are: &#39;Succeeded&#39;, &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner_properties import RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerProperties from a JSON string
route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner_properties_instance = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerProperties.to_json())

# convert the object into a dict
route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner_properties_dict = route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner_properties_instance.to_dict()
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerProperties from a dict
route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner_properties_from_dict = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerProperties.from_dict(route_filter_properties_format_ipv6_peerings_inner_properties_connections_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


