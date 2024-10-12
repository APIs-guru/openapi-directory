# ExpressRouteCircuitPropertiesFormat

Properties of ExpressRouteCircuit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_classic_operations** | **bool** | allow classic operations | [optional] 
**authorizations** | [**List[ExpressRouteCircuitAuthorization]**](ExpressRouteCircuitAuthorization.md) | Gets or sets list of authorizations | [optional] 
**circuit_provisioning_state** | **str** | Gets or sets CircuitProvisioningState state of the resource  | [optional] 
**gateway_manager_etag** | **str** | Gets or sets the GatewayManager Etag | [optional] 
**peerings** | [**List[ExpressRouteCircuitPeering]**](ExpressRouteCircuitPeering.md) | Gets or sets list of peerings | [optional] 
**provisioning_state** | **str** | Gets provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**service_key** | **str** | Gets or sets ServiceKey | [optional] 
**service_provider_notes** | **str** | Gets or sets ServiceProviderNotes | [optional] 
**service_provider_properties** | [**ExpressRouteCircuitServiceProviderProperties**](ExpressRouteCircuitServiceProviderProperties.md) |  | [optional] 
**service_provider_provisioning_state** | **str** | Gets or sets ServiceProviderProvisioningState state of the resource  | [optional] 

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


