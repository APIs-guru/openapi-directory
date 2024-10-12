# RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesPeeredConnectionsInnerProperties

Properties of the peer express route circuit connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | /29 IP address space to carve out Customer addresses for tunnels. | [optional] 
**auth_resource_guid** | **str** | The resource guid of the authorization used for the express route circuit connection. | [optional] 
**circuit_connection_status** | **str** | Express Route Circuit connection state. | [optional] [readonly] 
**connection_name** | **str** | The name of the express route circuit connection resource. | [optional] 
**express_route_circuit_peering** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering.md) |  | [optional] 
**peer_express_route_circuit_peering** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the peer express route circuit connection resource. Possible values are: &#39;Succeeded&#39;, &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.route_filter_properties_format_ipv6_peerings_inner_properties_peered_connections_inner_properties import RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesPeeredConnectionsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesPeeredConnectionsInnerProperties from a JSON string
route_filter_properties_format_ipv6_peerings_inner_properties_peered_connections_inner_properties_instance = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesPeeredConnectionsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesPeeredConnectionsInnerProperties.to_json())

# convert the object into a dict
route_filter_properties_format_ipv6_peerings_inner_properties_peered_connections_inner_properties_dict = route_filter_properties_format_ipv6_peerings_inner_properties_peered_connections_inner_properties_instance.to_dict()
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesPeeredConnectionsInnerProperties from a dict
route_filter_properties_format_ipv6_peerings_inner_properties_peered_connections_inner_properties_from_dict = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesPeeredConnectionsInnerProperties.from_dict(route_filter_properties_format_ipv6_peerings_inner_properties_peered_connections_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


