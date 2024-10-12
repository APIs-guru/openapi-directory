# ExpressRouteCircuitPropertiesFormat

Properties of ExpressRouteCircuit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_classic_operations** | **bool** | Allow classic operations. | [optional] 
**authorizations** | [**List[ExpressRouteCircuitAuthorization]**](ExpressRouteCircuitAuthorization.md) | The list of authorizations. | [optional] 
**bandwidth_in_gbps** | **float** | The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource. | [optional] 
**circuit_provisioning_state** | **str** | The CircuitProvisioningState state of the resource. | [optional] 
**express_route_port** | [**ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering**](ExpressRouteCircuitConnectionPropertiesFormatExpressRouteCircuitPeering.md) |  | [optional] 
**gateway_manager_etag** | **str** | The GatewayManager Etag. | [optional] 
**global_reach_enabled** | **bool** | Flag denoting Global reach status. | [optional] 
**peerings** | [**List[ExpressRouteCircuitPeering]**](ExpressRouteCircuitPeering.md) | The list of peerings. | [optional] 
**provisioning_state** | **str** | Gets the provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**service_key** | **str** | The ServiceKey. | [optional] 
**service_provider_notes** | **str** | The ServiceProviderNotes. | [optional] 
**service_provider_properties** | [**ExpressRouteCircuitServiceProviderProperties**](ExpressRouteCircuitServiceProviderProperties.md) |  | [optional] 
**service_provider_provisioning_state** | [**ServiceProviderProvisioningState**](ServiceProviderProvisioningState.md) |  | [optional] 
**stag** | **int** | The identifier of the circuit traffic. Outer tag for QinQ encapsulation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.express_route_circuit_properties_format import ExpressRouteCircuitPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitPropertiesFormat from a JSON string
express_route_circuit_properties_format_instance = ExpressRouteCircuitPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitPropertiesFormat.to_json())

# convert the object into a dict
express_route_circuit_properties_format_dict = express_route_circuit_properties_format_instance.to_dict()
# create an instance of ExpressRouteCircuitPropertiesFormat from a dict
express_route_circuit_properties_format_from_dict = ExpressRouteCircuitPropertiesFormat.from_dict(express_route_circuit_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


