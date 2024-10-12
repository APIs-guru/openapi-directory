# ExpressRouteCircuitRoutesTable

The routes table associated with the ExpressRouteCircuit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loc_prf** | **str** | Local preference value as set with the set local-preference route-map configuration command. | [optional] 
**network** | **str** | IP address of a network entity. | [optional] 
**next_hop** | **str** | NextHop address. | [optional] 
**path** | **str** | Autonomous system paths to the destination network. | [optional] 
**weight** | **int** | Route Weight. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuit_routes_table import ExpressRouteCircuitRoutesTable

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitRoutesTable from a JSON string
express_route_circuit_routes_table_instance = ExpressRouteCircuitRoutesTable.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitRoutesTable.to_json())

# convert the object into a dict
express_route_circuit_routes_table_dict = express_route_circuit_routes_table_instance.to_dict()
# create an instance of ExpressRouteCircuitRoutesTable from a dict
express_route_circuit_routes_table_from_dict = ExpressRouteCircuitRoutesTable.from_dict(express_route_circuit_routes_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


