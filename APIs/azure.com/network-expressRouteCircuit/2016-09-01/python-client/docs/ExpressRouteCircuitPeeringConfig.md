# ExpressRouteCircuitPeeringConfig

Specifies the peering configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertised_public_prefixes** | **List[str]** | The reference of AdvertisedPublicPrefixes. | [optional] 
**advertised_public_prefixes_state** | **str** | AdvertisedPublicPrefixState of the Peering resource. Possible values are &#39;NotConfigured&#39;, &#39;Configuring&#39;, &#39;Configured&#39;, and &#39;ValidationNeeded&#39;. | [optional] 
**customer_asn** | **int** | The CustomerASN of the peering. | [optional] 
**routing_registry_name** | **str** | The RoutingRegistryName of the configuration. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_peering_config import ExpressRouteCircuitPeeringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitPeeringConfig from a JSON string
express_route_circuit_peering_config_instance = ExpressRouteCircuitPeeringConfig.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitPeeringConfig.to_json())

# convert the object into a dict
express_route_circuit_peering_config_dict = express_route_circuit_peering_config_instance.to_dict()
# create an instance of ExpressRouteCircuitPeeringConfig from a dict
express_route_circuit_peering_config_from_dict = ExpressRouteCircuitPeeringConfig.from_dict(express_route_circuit_peering_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


