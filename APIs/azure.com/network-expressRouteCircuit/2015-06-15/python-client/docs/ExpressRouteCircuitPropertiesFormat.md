# ExpressRouteCircuitPropertiesFormat

Properties of ExpressRouteCircuit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizations** | [**List[ExpressRouteCircuitAuthorization]**](ExpressRouteCircuitAuthorization.md) | The list of authorizations. | [optional] 
**circuit_provisioning_state** | **str** | The CircuitProvisioningState state of the resource. | [optional] 
**peerings** | [**List[ExpressRouteCircuitPeering]**](ExpressRouteCircuitPeering.md) | The list of peerings. | [optional] 
**provisioning_state** | **str** | Gets the provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**service_key** | **str** | The ServiceKey. | [optional] 
**service_provider_notes** | **str** | The ServiceProviderNotes. | [optional] 
**service_provider_properties** | [**ExpressRouteCircuitServiceProviderProperties**](ExpressRouteCircuitServiceProviderProperties.md) |  | [optional] 
**service_provider_provisioning_state** | **str** | The ServiceProviderProvisioningState state of the resource. Possible values are &#39;NotProvisioned&#39;, &#39;Provisioning&#39;, &#39;Provisioned&#39;, and &#39;Deprovisioning&#39;. | [optional] 

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


