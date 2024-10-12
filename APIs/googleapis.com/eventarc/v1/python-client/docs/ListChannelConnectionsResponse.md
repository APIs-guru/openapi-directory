# ListChannelConnectionsResponse

The response message for the `ListChannelConnections` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_connections** | [**List[ChannelConnection]**](ChannelConnection.md) | The requested channel connections, up to the number specified in &#x60;page_size&#x60;. | [optional] 
**next_page_token** | **str** | A page token that can be sent to &#x60;ListChannelConnections&#x60; to request the next page. If this is empty, then there are no more pages. | [optional] 
**unreachable** | **List[str]** | Unreachable resources, if any. | [optional] 

## Example

```python
from openapi_client.models.list_channel_connections_response import ListChannelConnectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListChannelConnectionsResponse from a JSON string
list_channel_connections_response_instance = ListChannelConnectionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListChannelConnectionsResponse.to_json())

# convert the object into a dict
list_channel_connections_response_dict = list_channel_connections_response_instance.to_dict()
# create an instance of ListChannelConnectionsResponse from a dict
list_channel_connections_response_from_dict = ListChannelConnectionsResponse.from_dict(list_channel_connections_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


