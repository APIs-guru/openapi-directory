# WebsocketCallFields

WebSocket Call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**ProductWebsocket**](ProductWebsocket.md) |  | [optional] 
**status** | **str** | Search only for WebSocket call with corresponding status. | [optional] 

## Example

```python
from openapi_client.models.websocket_call_fields import WebsocketCallFields

# TODO update the JSON string below
json = "{}"
# create an instance of WebsocketCallFields from a JSON string
websocket_call_fields_instance = WebsocketCallFields.from_json(json)
# print the JSON string representation of the object
print(WebsocketCallFields.to_json())

# convert the object into a dict
websocket_call_fields_dict = websocket_call_fields_instance.to_dict()
# create an instance of WebsocketCallFields from a dict
websocket_call_fields_from_dict = WebsocketCallFields.from_dict(websocket_call_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


