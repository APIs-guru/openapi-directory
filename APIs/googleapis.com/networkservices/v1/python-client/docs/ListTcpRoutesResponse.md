# ListTcpRoutesResponse

Response returned by the ListTcpRoutes method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 
**tcp_routes** | [**List[TcpRoute]**](TcpRoute.md) | List of TcpRoute resources. | [optional] 

## Example

```python
from openapi_client.models.list_tcp_routes_response import ListTcpRoutesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTcpRoutesResponse from a JSON string
list_tcp_routes_response_instance = ListTcpRoutesResponse.from_json(json)
# print the JSON string representation of the object
print(ListTcpRoutesResponse.to_json())

# convert the object into a dict
list_tcp_routes_response_dict = list_tcp_routes_response_instance.to_dict()
# create an instance of ListTcpRoutesResponse from a dict
list_tcp_routes_response_from_dict = ListTcpRoutesResponse.from_dict(list_tcp_routes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


