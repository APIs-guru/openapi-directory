# RouteTableListResult

Response for ListRouteTable Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[RouteTable]**](RouteTable.md) | Gets List of RouteTables in a resource group | [optional] 

## Example

```python
from openapi_client.models.route_table_list_result import RouteTableListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RouteTableListResult from a JSON string
route_table_list_result_instance = RouteTableListResult.from_json(json)
# print the JSON string representation of the object
print(RouteTableListResult.to_json())

# convert the object into a dict
route_table_list_result_dict = route_table_list_result_instance.to_dict()
# create an instance of RouteTableListResult from a dict
route_table_list_result_from_dict = RouteTableListResult.from_dict(route_table_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


