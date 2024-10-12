# ExpressRouteCircuitServiceProviderProperties

Contains ServiceProviderProperties in an ExpressRouteCircuit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_in_mbps** | **int** | The BandwidthInMbps. | [optional] 
**peering_location** | **str** | The peering location. | [optional] 
**service_provider_name** | **str** | The serviceProviderName. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_service_provider_properties import ExpressRouteCircuitServiceProviderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitServiceProviderProperties from a JSON string
express_route_circuit_service_provider_properties_instance = ExpressRouteCircuitServiceProviderProperties.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitServiceProviderProperties.to_json())

# convert the object into a dict
express_route_circuit_service_provider_properties_dict = express_route_circuit_service_provider_properties_instance.to_dict()
# create an instance of ExpressRouteCircuitServiceProviderProperties from a dict
express_route_circuit_service_provider_properties_from_dict = ExpressRouteCircuitServiceProviderProperties.from_dict(express_route_circuit_service_provider_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


