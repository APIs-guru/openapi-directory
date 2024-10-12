# ExpressRouteCrossConnectionsRoutesTableSummaryListResult

Response for ListRoutesTable associated with the Express Route Cross Connections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[ExpressRouteCrossConnectionRoutesTableSummary]**](ExpressRouteCrossConnectionRoutesTableSummary.md) | A list of the routes table. | [optional] 

## Example

```python
from openapi_client.models.express_route_cross_connections_routes_table_summary_list_result import ExpressRouteCrossConnectionsRoutesTableSummaryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCrossConnectionsRoutesTableSummaryListResult from a JSON string
express_route_cross_connections_routes_table_summary_list_result_instance = ExpressRouteCrossConnectionsRoutesTableSummaryListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCrossConnectionsRoutesTableSummaryListResult.to_json())

# convert the object into a dict
express_route_cross_connections_routes_table_summary_list_result_dict = express_route_cross_connections_routes_table_summary_list_result_instance.to_dict()
# create an instance of ExpressRouteCrossConnectionsRoutesTableSummaryListResult from a dict
express_route_cross_connections_routes_table_summary_list_result_from_dict = ExpressRouteCrossConnectionsRoutesTableSummaryListResult.from_dict(express_route_cross_connections_routes_table_summary_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


