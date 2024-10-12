# ExpressRouteCircuitPeeringListResult

Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCircuit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRouteCircuitPeering]**](ExpressRouteCircuitPeering.md) | The peerings in an express route circuit. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_peering_list_result import ExpressRouteCircuitPeeringListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitPeeringListResult from a JSON string
express_route_circuit_peering_list_result_instance = ExpressRouteCircuitPeeringListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitPeeringListResult.to_json())

# convert the object into a dict
express_route_circuit_peering_list_result_dict = express_route_circuit_peering_list_result_instance.to_dict()
# create an instance of ExpressRouteCircuitPeeringListResult from a dict
express_route_circuit_peering_list_result_from_dict = ExpressRouteCircuitPeeringListResult.from_dict(express_route_circuit_peering_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


