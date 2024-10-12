# ListRouteTablesResponse

Response for HubService.ListRouteTables method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. | [optional] 
**route_tables** | [**List[RouteTable]**](RouteTable.md) | The requested route tables. | [optional] 
**unreachable** | **List[str]** | Hubs that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_route_tables_response import ListRouteTablesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRouteTablesResponse from a JSON string
list_route_tables_response_instance = ListRouteTablesResponse.from_json(json)
# print the JSON string representation of the object
print(ListRouteTablesResponse.to_json())

# convert the object into a dict
list_route_tables_response_dict = list_route_tables_response_instance.to_dict()
# create an instance of ListRouteTablesResponse from a dict
list_route_tables_response_from_dict = ListRouteTablesResponse.from_dict(list_route_tables_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


