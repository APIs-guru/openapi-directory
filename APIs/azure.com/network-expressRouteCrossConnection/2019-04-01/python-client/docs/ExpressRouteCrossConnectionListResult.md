# ExpressRouteCrossConnectionListResult

Response for ListExpressRouteCrossConnection API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[ExpressRouteCrossConnection]**](ExpressRouteCrossConnection.md) | A list of ExpressRouteCrossConnection resources. | [optional] 

## Example

```python
from openapi_client.models.express_route_cross_connection_list_result import ExpressRouteCrossConnectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCrossConnectionListResult from a JSON string
express_route_cross_connection_list_result_instance = ExpressRouteCrossConnectionListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCrossConnectionListResult.to_json())

# convert the object into a dict
express_route_cross_connection_list_result_dict = express_route_cross_connection_list_result_instance.to_dict()
# create an instance of ExpressRouteCrossConnectionListResult from a dict
express_route_cross_connection_list_result_from_dict = ExpressRouteCrossConnectionListResult.from_dict(express_route_cross_connection_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


