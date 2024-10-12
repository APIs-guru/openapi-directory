# RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfig

Contains IPv6 peering config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**microsoft_peering_config** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfigMicrosoftPeeringConfig**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfigMicrosoftPeeringConfig.md) |  | [optional] 
**primary_peer_address_prefix** | **str** | The primary address prefix. | [optional] 
**route_filter** | [**RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering**](RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesConnectionsInnerPropertiesExpressRouteCircuitPeering.md) |  | [optional] 
**secondary_peer_address_prefix** | **str** | The secondary address prefix. | [optional] 
**state** | **str** | The state of peering. | [optional] 

## Example

```python
from openapi_client.models.route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config import RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfig from a JSON string
route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config_instance = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfig.from_json(json)
# print the JSON string representation of the object
print(RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfig.to_json())

# convert the object into a dict
route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config_dict = route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config_instance.to_dict()
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfig from a dict
route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config_from_dict = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfig.from_dict(route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


