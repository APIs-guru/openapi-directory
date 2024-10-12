# TelegramChannel

Telegram channel definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TelegramChannelProperties**](TelegramChannelProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.telegram_channel import TelegramChannel

# TODO update the JSON string below
json = "{}"
# create an instance of TelegramChannel from a JSON string
telegram_channel_instance = TelegramChannel.from_json(json)
# print the JSON string representation of the object
print(TelegramChannel.to_json())

# convert the object into a dict
telegram_channel_dict = telegram_channel_instance.to_dict()
# create an instance of TelegramChannel from a dict
telegram_channel_from_dict = TelegramChannel.from_dict(telegram_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


