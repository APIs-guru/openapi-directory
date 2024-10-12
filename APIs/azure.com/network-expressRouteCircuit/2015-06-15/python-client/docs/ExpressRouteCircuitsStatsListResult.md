# ExpressRouteCircuitsStatsListResult

Response for ListStats from Express Route Circuits Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRouteCircuitStats]**](ExpressRouteCircuitStats.md) | Gets List of Stats | [optional] 

## Example

```python
from openapi_client.models.express_route_circuits_stats_list_result import ExpressRouteCircuitsStatsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitsStatsListResult from a JSON string
express_route_circuits_stats_list_result_instance = ExpressRouteCircuitsStatsListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitsStatsListResult.to_json())

# convert the object into a dict
express_route_circuits_stats_list_result_dict = express_route_circuits_stats_list_result_instance.to_dict()
# create an instance of ExpressRouteCircuitsStatsListResult from a dict
express_route_circuits_stats_list_result_from_dict = ExpressRouteCircuitsStatsListResult.from_dict(express_route_circuits_stats_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


