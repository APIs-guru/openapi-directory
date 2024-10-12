# ExpressRouteCircuitListResult

Response for ListExpressRouteCircuit Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRouteCircuit]**](ExpressRouteCircuit.md) | Gets a list of ExpressRouteCircuits in a resource group | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_list_result import ExpressRouteCircuitListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitListResult from a JSON string
express_route_circuit_list_result_instance = ExpressRouteCircuitListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitListResult.to_json())

# convert the object into a dict
express_route_circuit_list_result_dict = express_route_circuit_list_result_instance.to_dict()
# create an instance of ExpressRouteCircuitListResult from a dict
express_route_circuit_list_result_from_dict = ExpressRouteCircuitListResult.from_dict(express_route_circuit_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


