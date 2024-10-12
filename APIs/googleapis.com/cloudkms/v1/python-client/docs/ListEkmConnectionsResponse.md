# ListEkmConnectionsResponse

Response message for EkmService.ListEkmConnections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ekm_connections** | [**List[EkmConnection]**](EkmConnection.md) | The list of EkmConnections. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in ListEkmConnectionsRequest.page_token to retrieve the next page of results. | [optional] 
**total_size** | **int** | The total number of EkmConnections that matched the query. | [optional] 

## Example

```python
from openapi_client.models.list_ekm_connections_response import ListEkmConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEkmConnectionsResponse from a JSON string
list_ekm_connections_response_instance = ListEkmConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListEkmConnectionsResponse.to_json())

# convert the object into a dict
list_ekm_connections_response_dict = list_ekm_connections_response_instance.to_dict()
# create an instance of ListEkmConnectionsResponse from a dict
list_ekm_connections_response_from_dict = ListEkmConnectionsResponse.from_dict(list_ekm_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


