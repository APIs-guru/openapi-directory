# EndpointWebsocketHeaders

Details of the Websocket you want to connect to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | This is an example header. You can provide any headers you may need | [optional] 

## Example

```python
from openapi_client.models.endpoint_websocket_headers import EndpointWebsocketHeaders

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointWebsocketHeaders from a JSON string
endpoint_websocket_headers_instance = EndpointWebsocketHeaders.from_json(json)
# print the JSON string representation of the object
print(EndpointWebsocketHeaders.to_json())

# convert the object into a dict
endpoint_websocket_headers_dict = endpoint_websocket_headers_instance.to_dict()
# create an instance of EndpointWebsocketHeaders from a dict
endpoint_websocket_headers_from_dict = EndpointWebsocketHeaders.from_dict(endpoint_websocket_headers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


