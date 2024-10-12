# ListConnectionsResponse

The response to a request for the authenticated user's connections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | [**List[Person]**](Person.md) | The list of people that the requestor is connected to. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**next_sync_token** | **str** | A token, which can be sent as &#x60;sync_token&#x60; to retrieve changes since the last request. Request must set &#x60;request_sync_token&#x60; to return the sync token. When the response is paginated, only the last page will contain &#x60;nextSyncToken&#x60;. | [optional] 
**total_items** | **int** | The total number of items in the list without pagination. | [optional] 
**total_people** | **int** | **DEPRECATED** (Please use totalItems) The total number of people in the list without pagination. | [optional] 

## Example

```python
from openapi_client.models.list_connections_response import ListConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConnectionsResponse from a JSON string
list_connections_response_instance = ListConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListConnectionsResponse.to_json())

# convert the object into a dict
list_connections_response_dict = list_connections_response_instance.to_dict()
# create an instance of ListConnectionsResponse from a dict
list_connections_response_from_dict = ListConnectionsResponse.from_dict(list_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


