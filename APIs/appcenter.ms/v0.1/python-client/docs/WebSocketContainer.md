# WebSocketContainer

A websocket reference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | WebSocket URL | 

## Example

```python
from openapi_client.models.web_socket_container import WebSocketContainer

# TODO update the JSON string below
json = "{}"
# create an instance of WebSocketContainer from a JSON string
web_socket_container_instance = WebSocketContainer.from_json(json)
# print the JSON string representation of the object
print(WebSocketContainer.to_json())

# convert the object into a dict
web_socket_container_dict = web_socket_container_instance.to_dict()
# create an instance of WebSocketContainer from a dict
web_socket_container_from_dict = WebSocketContainer.from_dict(web_socket_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


