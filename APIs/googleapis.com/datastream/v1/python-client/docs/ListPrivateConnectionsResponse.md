# ListPrivateConnectionsResponse

Response containing a list of private connection configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**private_connections** | [**List[PrivateConnection]**](PrivateConnection.md) | List of private connectivity configurations. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_private_connections_response import ListPrivateConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPrivateConnectionsResponse from a JSON string
list_private_connections_response_instance = ListPrivateConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPrivateConnectionsResponse.to_json())

# convert the object into a dict
list_private_connections_response_dict = list_private_connections_response_instance.to_dict()
# create an instance of ListPrivateConnectionsResponse from a dict
list_private_connections_response_from_dict = ListPrivateConnectionsResponse.from_dict(list_private_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


