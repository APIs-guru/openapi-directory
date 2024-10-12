# RouteListResult

Response for ListRoute Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[Route]**](Route.md) | Gets List of Routes in a resource group | [optional] 

## Example

```python
from openapi_client.models.route_list_result import RouteListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RouteListResult from a JSON string
route_list_result_instance = RouteListResult.from_json(json)
# print the JSON string representation of the object
print(RouteListResult.to_json())

# convert the object into a dict
route_list_result_dict = route_list_result_instance.to_dict()
# create an instance of RouteListResult from a dict
route_list_result_from_dict = RouteListResult.from_dict(route_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


