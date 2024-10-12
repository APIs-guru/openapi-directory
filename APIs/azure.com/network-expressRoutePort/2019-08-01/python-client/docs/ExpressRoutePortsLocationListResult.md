# ExpressRoutePortsLocationListResult

Response for ListExpressRoutePortsLocations API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRoutePortsLocation]**](ExpressRoutePortsLocation.md) | The list of all ExpressRoutePort peering locations. | [optional] 

## Example

```python
from openapi_client.models.express_route_ports_location_list_result import ExpressRoutePortsLocationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRoutePortsLocationListResult from a JSON string
express_route_ports_location_list_result_instance = ExpressRoutePortsLocationListResult.from_json(json)
# print the JSON string representation of the object
print(ExpressRoutePortsLocationListResult.to_json())

# convert the object into a dict
express_route_ports_location_list_result_dict = express_route_ports_location_list_result_instance.to_dict()
# create an instance of ExpressRoutePortsLocationListResult from a dict
express_route_ports_location_list_result_from_dict = ExpressRoutePortsLocationListResult.from_dict(express_route_ports_location_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


