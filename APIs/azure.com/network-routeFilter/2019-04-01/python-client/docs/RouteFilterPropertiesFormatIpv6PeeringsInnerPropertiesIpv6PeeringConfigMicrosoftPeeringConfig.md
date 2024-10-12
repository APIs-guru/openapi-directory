# RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfigMicrosoftPeeringConfig

Specifies the peering configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertised_communities** | **List[str]** | The communities of bgp peering. Specified for microsoft peering. | [optional] 
**advertised_public_prefixes** | **List[str]** | The reference of AdvertisedPublicPrefixes. | [optional] 
**advertised_public_prefixes_state** | **str** | The advertised public prefix state of the Peering resource. | [optional] 
**customer_asn** | **int** | The CustomerASN of the peering. | [optional] 
**legacy_mode** | **int** | The legacy mode of the peering. | [optional] 
**routing_registry_name** | **str** | The RoutingRegistryName of the configuration. | [optional] 

## Example

```python
from openapi_client.models.route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config_microsoft_peering_config import RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfigMicrosoftPeeringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfigMicrosoftPeeringConfig from a JSON string
route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config_microsoft_peering_config_instance = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfigMicrosoftPeeringConfig.from_json(json)
# print the JSON string representation of the object
print(RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfigMicrosoftPeeringConfig.to_json())

# convert the object into a dict
route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config_microsoft_peering_config_dict = route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config_microsoft_peering_config_instance.to_dict()
# create an instance of RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfigMicrosoftPeeringConfig from a dict
route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config_microsoft_peering_config_from_dict = RouteFilterPropertiesFormatIpv6PeeringsInnerPropertiesIpv6PeeringConfigMicrosoftPeeringConfig.from_dict(route_filter_properties_format_ipv6_peerings_inner_properties_ipv6_peering_config_microsoft_peering_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


