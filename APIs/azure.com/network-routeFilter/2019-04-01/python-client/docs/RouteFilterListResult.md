# RouteFilterListResult

Response for the ListRouteFilters API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[RouteFilter]**](RouteFilter.md) | Gets a list of route filters in a resource group. | [optional] 

## Example

```python
from openapi_client.models.route_filter_list_result import RouteFilterListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilterListResult from a JSON string
route_filter_list_result_instance = RouteFilterListResult.from_json(json)
# print the JSON string representation of the object
print(RouteFilterListResult.to_json())

# convert the object into a dict
route_filter_list_result_dict = route_filter_list_result_instance.to_dict()
# create an instance of RouteFilterListResult from a dict
route_filter_list_result_from_dict = RouteFilterListResult.from_dict(route_filter_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


