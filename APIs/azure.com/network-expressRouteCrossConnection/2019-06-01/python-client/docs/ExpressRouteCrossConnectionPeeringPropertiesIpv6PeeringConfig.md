# ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfig

Contains IPv6 peering config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**microsoft_peering_config** | [**ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfigMicrosoftPeeringConfig**](ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfigMicrosoftPeeringConfig.md) |  | [optional] 
**primary_peer_address_prefix** | **str** | The primary address prefix. | [optional] 
**route_filter** | [**ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfigRouteFilter**](ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfigRouteFilter.md) |  | [optional] 
**secondary_peer_address_prefix** | **str** | The secondary address prefix. | [optional] 
**state** | **str** | The state of peering. | [optional] 

## Example

```python
from openapi_client.models.express_route_cross_connection_peering_properties_ipv6_peering_config import ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfig from a JSON string
express_route_cross_connection_peering_properties_ipv6_peering_config_instance = ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfig.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfig.to_json())

# convert the object into a dict
express_route_cross_connection_peering_properties_ipv6_peering_config_dict = express_route_cross_connection_peering_properties_ipv6_peering_config_instance.to_dict()
# create an instance of ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfig from a dict
express_route_cross_connection_peering_properties_ipv6_peering_config_from_dict = ExpressRouteCrossConnectionPeeringPropertiesIpv6PeeringConfig.from_dict(express_route_cross_connection_peering_properties_ipv6_peering_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


