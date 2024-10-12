# ListConnectionsResponse

Response message for BeyondCorp.ListConnections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | [**List[Connection]**](Connection.md) | A list of BeyondCorp Connections in the project. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | A list of locations that could not be reached. | [optional] 

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


