# ExpressRouteCircuitConnectionListResult

Response for ListConnections API service call retrieves all global reach connections that belongs to a Private Peering for an ExpressRouteCircuit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRouteCircuitConnection]**](ExpressRouteCircuitConnection.md) | The global reach connection associated with Private Peering in an ExpressRoute Circuit. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_connection_list_result import ExpressRouteCircuitConnectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitConnectionListResult from a JSON string
express_route_circuit_connection_list_result_instance = ExpressRouteCircuitConnectionListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitConnectionListResult.to_json())

# convert the object into a dict
express_route_circuit_connection_list_result_dict = express_route_circuit_connection_list_result_instance.to_dict()
# create an instance of ExpressRouteCircuitConnectionListResult from a dict
express_route_circuit_connection_list_result_from_dict = ExpressRouteCircuitConnectionListResult.from_dict(express_route_circuit_connection_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


