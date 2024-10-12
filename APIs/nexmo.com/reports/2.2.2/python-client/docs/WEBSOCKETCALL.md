# WEBSOCKETCALL

WebSocket Call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**ProductWebsocket**](ProductWebsocket.md) |  | [optional] 
**status** | **str** | Search only for WebSocket call with corresponding status. | [optional] 

## Example

```python
from openapi_client.models.websocketcall import WEBSOCKETCALL

# TODO update the JSON string below
json = "{}"
# create an instance of WEBSOCKETCALL from a JSON string
websocketcall_instance = WEBSOCKETCALL.from_json(json)
# print the JSON string representation of the object
print(WEBSOCKETCALL.to_json())

# convert the object into a dict
websocketcall_dict = websocketcall_instance.to_dict()
# create an instance of WEBSOCKETCALL from a dict
websocketcall_from_dict = WEBSOCKETCALL.from_dict(websocketcall_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


