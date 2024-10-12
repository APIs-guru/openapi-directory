# Ipv6ExpressRouteCircuitPeeringConfig

Contains IPv6 peering config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**microsoft_peering_config** | [**ExpressRouteCircuitPeeringConfig**](ExpressRouteCircuitPeeringConfig.md) |  | [optional] 
**primary_peer_address_prefix** | **str** | The primary address prefix. | [optional] 
**route_filter** | [**ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering**](ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering.md) |  | [optional] 
**secondary_peer_address_prefix** | **str** | The secondary address prefix. | [optional] 
**state** | **str** | The state of peering. | [optional] 

## Example

```python
from openapi_client.models.ipv6_express_route_circuit_peering_config import Ipv6ExpressRouteCircuitPeeringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Ipv6ExpressRouteCircuitPeeringConfig from a JSON string
ipv6_express_route_circuit_peering_config_instance = Ipv6ExpressRouteCircuitPeeringConfig.from_json(json)
# print the JSON string representation of the object
print(Ipv6ExpressRouteCircuitPeeringConfig.to_json())

# convert the object into a dict
ipv6_express_route_circuit_peering_config_dict = ipv6_express_route_circuit_peering_config_instance.to_dict()
# create an instance of Ipv6ExpressRouteCircuitPeeringConfig from a dict
ipv6_express_route_circuit_peering_config_from_dict = Ipv6ExpressRouteCircuitPeeringConfig.from_dict(ipv6_express_route_circuit_peering_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


