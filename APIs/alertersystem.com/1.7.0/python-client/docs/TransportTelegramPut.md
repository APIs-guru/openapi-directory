# TransportTelegramPut

The TransportTelegram resource is a collection of transports that carry dispatched alerts to the external Telegram service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**telegram_chat_id** | **str** | The chat ID for the Telegram service. | 
**telegram_token** | **str** | The token for the Telegram service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_telegram_put import TransportTelegramPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTelegramPut from a JSON string
transport_telegram_put_instance = TransportTelegramPut.from_json(json)
# print the JSON string representation of the object
print(TransportTelegramPut.to_json())

# convert the object into a dict
transport_telegram_put_dict = transport_telegram_put_instance.to_dict()
# create an instance of TransportTelegramPut from a dict
transport_telegram_put_from_dict = TransportTelegramPut.from_dict(transport_telegram_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


