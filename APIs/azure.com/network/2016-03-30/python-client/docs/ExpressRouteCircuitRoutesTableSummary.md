# ExpressRouteCircuitRoutesTableSummary

The routes table associated with the ExpressRouteCircuit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_as** | **int** | Autonomous system number. | [optional] 
**neighbor** | **str** | Neighbor. | [optional] 
**state_pfx_rcd** | **str** | Current state of the BGP session, and the number of prefixes that have been received from a neighbor or peer group. | [optional] 
**up_down** | **str** | The length of time that the BGP session has been in the Established state, or the current status if not in the Established state. | [optional] 
**v** | **int** | BGP version number spoken to the neighbor. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_routes_table_summary import ExpressRouteCircuitRoutesTableSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitRoutesTableSummary from a JSON string
express_route_circuit_routes_table_summary_instance = ExpressRouteCircuitRoutesTableSummary.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitRoutesTableSummary.to_json())

# convert the object into a dict
express_route_circuit_routes_table_summary_dict = express_route_circuit_routes_table_summary_instance.to_dict()
# create an instance of ExpressRouteCircuitRoutesTableSummary from a dict
express_route_circuit_routes_table_summary_from_dict = ExpressRouteCircuitRoutesTableSummary.from_dict(express_route_circuit_routes_table_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


