# ExpressRouteCircuitsRoutesTableSummaryListResult

Response for ListRoutesTable associated with the Express Route Circuits API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRouteCircuitRoutesTableSummary]**](ExpressRouteCircuitRoutesTableSummary.md) | A list of the routes table. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuits_routes_table_summary_list_result import ExpressRouteCircuitsRoutesTableSummaryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitsRoutesTableSummaryListResult from a JSON string
express_route_circuits_routes_table_summary_list_result_instance = ExpressRouteCircuitsRoutesTableSummaryListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitsRoutesTableSummaryListResult.to_json())

# convert the object into a dict
express_route_circuits_routes_table_summary_list_result_dict = express_route_circuits_routes_table_summary_list_result_instance.to_dict()
# create an instance of ExpressRouteCircuitsRoutesTableSummaryListResult from a dict
express_route_circuits_routes_table_summary_list_result_from_dict = ExpressRouteCircuitsRoutesTableSummaryListResult.from_dict(express_route_circuits_routes_table_summary_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


