# EndpointWebsocket

Connect to a Websocket

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** |  | 
**headers** | [**EndpointWebsocketHeaders**](EndpointWebsocketHeaders.md) |  | [optional] 
**type** | **str** | The type of connection. Must be &#x60;websocket&#x60; | 
**uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_websocket import EndpointWebsocket

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointWebsocket from a JSON string
endpoint_websocket_instance = EndpointWebsocket.from_json(json)
# print the JSON string representation of the object
print(EndpointWebsocket.to_json())

# convert the object into a dict
endpoint_websocket_dict = endpoint_websocket_instance.to_dict()
# create an instance of EndpointWebsocket from a dict
endpoint_websocket_from_dict = EndpointWebsocket.from_dict(endpoint_websocket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


