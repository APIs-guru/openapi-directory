# TransportTelegramJsonldPost

The TransportTelegram resource is a collection of transports that carry dispatched alerts to the external Telegram service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**telegram_chat_id** | **str** | The chat ID for the Telegram service. | 
**telegram_token** | **str** | The token for the Telegram service. Stored in encrypted format. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_telegram_jsonld_post import TransportTelegramJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportTelegramJsonldPost from a JSON string
transport_telegram_jsonld_post_instance = TransportTelegramJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportTelegramJsonldPost.to_json())

# convert the object into a dict
transport_telegram_jsonld_post_dict = transport_telegram_jsonld_post_instance.to_dict()
# create an instance of TransportTelegramJsonldPost from a dict
transport_telegram_jsonld_post_from_dict = TransportTelegramJsonldPost.from_dict(transport_telegram_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


