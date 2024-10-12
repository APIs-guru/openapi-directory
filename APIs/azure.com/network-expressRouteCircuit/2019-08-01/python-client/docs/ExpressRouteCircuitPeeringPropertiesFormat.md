# ExpressRouteCircuitPeeringPropertiesFormat

Properties of the express route circuit peering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_asn** | **int** | The Azure ASN. | [optional] 
**connections** | [**List[ExpressRouteCircuitConnection]**](ExpressRouteCircuitConnection.md) | The list of circuit connections associated with Azure Private Peering for this circuit. | [optional] 
**express_route_connection** | [**ExpressRouteCircuitPeeringPropertiesFormatExpressRouteConnection**](ExpressRouteCircuitPeeringPropertiesFormatExpressRouteConnection.md) |  | [optional] 
**gateway_manager_etag** | **str** | The GatewayManager Etag. | [optional] 
**ipv6_peering_config** | [**Ipv6ExpressRouteCircuitPeeringConfig**](Ipv6ExpressRouteCircuitPeeringConfig.md) |  | [optional] 
**last_modified_by** | **str** | Who was the last to modify the peering. | [optional] 
**microsoft_peering_config** | [**ExpressRouteCircuitPeeringConfig**](ExpressRouteCircuitPeeringConfig.md) |  | [optional] 
**peer_asn** | **int** | The peer ASN. | [optional] 
**peered_connections** | [**List[PeerExpressRouteCircuitConnection]**](PeerExpressRouteCircuitConnection.md) | The list of peered circuit connections associated with Azure Private Peering for this circuit. | [optional] [readonly] 
**peering_type** | [**ExpressRoutePeeringType**](ExpressRoutePeeringType.md) |  | [optional] 
**primary_azure_port** | **str** | The primary port. | [optional] 
**primary_peer_address_prefix** | **str** | The primary address prefix. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**route_filter** | [**ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering**](ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering.md) |  | [optional] 
**secondary_azure_port** | **str** | The secondary port. | [optional] 
**secondary_peer_address_prefix** | **str** | The secondary address prefix. | [optional] 
**shared_key** | **str** | The shared key. | [optional] 
**state** | [**ExpressRoutePeeringState**](ExpressRoutePeeringState.md) |  | [optional] 
**stats** | [**ExpressRouteCircuitStats**](ExpressRouteCircuitStats.md) |  | [optional] 
**vlan_id** | **int** | The VLAN ID. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_peering_properties_format import ExpressRouteCircuitPeeringPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitPeeringPropertiesFormat from a JSON string
express_route_circuit_peering_properties_format_instance = ExpressRouteCircuitPeeringPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitPeeringPropertiesFormat.to_json())

# convert the object into a dict
express_route_circuit_peering_properties_format_dict = express_route_circuit_peering_properties_format_instance.to_dict()
# create an instance of ExpressRouteCircuitPeeringPropertiesFormat from a dict
express_route_circuit_peering_properties_format_from_dict = ExpressRouteCircuitPeeringPropertiesFormat.from_dict(express_route_circuit_peering_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


