# RouteFilterPropertiesFormatIpv6PeeringsInnerProperties

Properties of the express route circuit peering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_asn** | **int** | The Azure ASN. | [optional] 
**connections** | [**List[RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInner]**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInner.md) | The list of circuit connections associated with Azure Private Peering for this circuit. | [optional] 
**express_route_connection** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesExpressRouteConnection**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesExpressRouteConnection.md) |  | [optional] 
**gateway_manager_etag** | **str** | The GatewayManager Etag. | [optional] 
**ipv6_peering_config** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfig**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfig.md) |  | [optional] 
**last_modified_by** | **str** | Who was the last to modify the peering. | [optional] 
**microsoft_peering_config** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfigMicrosoftPeeringConfig**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfigMicrosoftPeeringConfig.md) |  | [optional] 
**peer_asn** | **int** | The peer ASN. | [optional] 
**peered_connections** | [**List[RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesPeeredConnectionsInner]**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesPeeredConnectionsInner.md) | The list of peered circuit connections associated with Azure Private Peering for this circuit. | [optional] [readonly] 
**peering_type** | **str** | The peering type. | [optional] 
**primary_azure_port** | **str** | The primary port. | [optional] 
**primary_peer_address_prefix** | **str** | The primary address prefix. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**route_filter** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering.md) |  | [optional] 
**secondary_azure_port** | **str** | The secondary port. | [optional] 
**secondary_peer_address_prefix** | **str** | The secondary address prefix. | [optional] 
**shared_key** | **str** | The shared key. | [optional] 
**state** | **str** | The state of peering. | [optional] 
**stats** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesStats**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesStats.md) |  | [optional] 
**vlan_id** | **int** | The VLAN ID. | [optional] 

## Example

```python
from openapi_client.models.route_filter_properties_format_ipv6_peerings_inner_properties import RouteFilterPropertiesFormatIpv6PeeringsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerProperties from a JSON string
route_filter_properties_format_ipv6_peerings_inner_properties_instance = RouteFilterPropertiesFormatIpv6PeeringsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(RouteFilterPropertiesFormatIpv6PeeringsInnerProperties.to_json())

# convert the object into a dict
route_filter_properties_format_ipv6_peerings_inner_properties_dict = route_filter_properties_format_ipv6_peerings_inner_properties_instance.to_dict()
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerProperties from a dict
route_filter_properties_format_ipv6_peerings_inner_properties_from_dict = RouteFilterPropertiesFormatIpv6PeeringsInnerProperties.from_dict(route_filter_properties_format_ipv6_peerings_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


