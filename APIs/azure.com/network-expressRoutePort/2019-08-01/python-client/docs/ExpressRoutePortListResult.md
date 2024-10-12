# ExpressRoutePortListResult

Response for ListExpressRoutePorts API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRoutePort]**](ExpressRoutePort.md) | A list of ExpressRoutePort resources. | [optional] 

## Example

```python
from openapi_client.models.express_route_port_list_result import ExpressRoutePortListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRoutePortListResult from a JSON string
express_route_port_list_result_instance = ExpressRoutePortListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRoutePortListResult.to_json())

# convert the object into a dict
express_route_port_list_result_dict = express_route_port_list_result_instance.to_dict()
# create an instance of ExpressRoutePortListResult from a dict
express_route_port_list_result_from_dict = ExpressRoutePortListResult.from_dict(express_route_port_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


