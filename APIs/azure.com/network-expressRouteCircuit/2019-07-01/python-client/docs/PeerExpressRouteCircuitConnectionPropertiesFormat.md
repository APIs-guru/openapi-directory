# PeerExpressRouteCircuitConnectionPropertiesFormat

Properties of the peer express route circuit connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | /29 IP address space to carve out Customer addresses for tunnels. | [optional] 
**auth_resource_guid** | **str** | The resource guid of the authorization used for the express route circuit connection. | [optional] 
**circuit_connection_status** | [**CircuitConnectionStatus**](CircuitConnectionStatus.md) |  | [optional] 
**connection_name** | **str** | The name of the express route circuit connection resource. | [optional] 
**express_route_circuit_peering** | [**ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering**](ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering.md) |  | [optional] 
**peer_express_route_circuit_peering** | [**ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering**](ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering.md) |  | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peer_express_route_circuit_connection_properties_format import PeerExpressRouteCircuitConnectionPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of PeerExpressRouteCircuitConnectionPropertiesFormat from a JSON string
peer_express_route_circuit_connection_properties_format_instance = PeerExpressRouteCircuitConnectionPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(PeerExpressRouteCircuitConnectionPropertiesFormat.to_json())

# convert the object into a dict
peer_express_route_circuit_connection_properties_format_dict = peer_express_route_circuit_connection_properties_format_instance.to_dict()
# create an instance of PeerExpressRouteCircuitConnectionPropertiesFormat from a dict
peer_express_route_circuit_connection_properties_format_from_dict = PeerExpressRouteCircuitConnectionPropertiesFormat.from_dict(peer_express_route_circuit_connection_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


