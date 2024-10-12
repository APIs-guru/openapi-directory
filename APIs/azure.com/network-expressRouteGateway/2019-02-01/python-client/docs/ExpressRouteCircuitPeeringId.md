# ExpressRouteCircuitPeeringId

ExpressRoute circuit peering identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the ExpressRoute circuit peering. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_peering_id import ExpressRouteCircuitPeeringId

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitPeeringId from a JSON string
express_route_circuit_peering_id_instance = ExpressRouteCircuitPeeringId.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitPeeringId.to_json())

# convert the object into a dict
express_route_circuit_peering_id_dict = express_route_circuit_peering_id_instance.to_dict()
# create an instance of ExpressRouteCircuitPeeringId from a dict
express_route_circuit_peering_id_from_dict = ExpressRouteCircuitPeeringId.from_dict(express_route_circuit_peering_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


