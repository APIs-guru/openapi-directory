# ListRoutesResponse

Route list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**routes** | [**List[Route]**](Route.md) | List of Routes. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_routes_response import ListRoutesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRoutesResponse from a JSON string
list_routes_response_instance = ListRoutesResponse.from_json(json)
# print the JSON string representation of the object
print(ListRoutesResponse.to_json())

# convert the object into a dict
list_routes_response_dict = list_routes_response_instance.to_dict()
# create an instance of ListRoutesResponse from a dict
list_routes_response_from_dict = ListRoutesResponse.from_dict(list_routes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


