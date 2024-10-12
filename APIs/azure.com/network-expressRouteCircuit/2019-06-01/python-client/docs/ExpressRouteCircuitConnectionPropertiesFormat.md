# ExpressRouteCircuitConnectionPropertiesFormat

Properties of the express route circuit connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | /29 IP address space to carve out Customer addresses for tunnels. | [optional] 
**authorization_key** | **str** | The authorization key. | [optional] 
**circuit_connection_status** | [**CircuitConnectionStatus**](CircuitConnectionStatus.md) |  | [optional] 
**express_route_circuit_peering** | [**ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering**](ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering.md) |  | [optional] 
**peer_express_route_circuit_peering** | [**ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering**](ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the circuit connection resource. Possible values are: &#39;Succeeded&#39;, &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.express_route_circuit_connection_properties_format import ExpressRouteCircuitConnectionPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitConnectionPropertiesFormat from a JSON string
express_route_circuit_connection_properties_format_instance = ExpressRouteCircuitConnectionPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitConnectionPropertiesFormat.to_json())

# convert the object into a dict
express_route_circuit_connection_properties_format_dict = express_route_circuit_connection_properties_format_instance.to_dict()
# create an instance of ExpressRouteCircuitConnectionPropertiesFormat from a dict
express_route_circuit_connection_properties_format_from_dict = ExpressRouteCircuitConnectionPropertiesFormat.from_dict(express_route_circuit_connection_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


