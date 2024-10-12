# TelegramChannelProperties

The parameters to provide for the Telegram channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The Telegram access token. Value only returned through POST to the action Channel List API, otherwise empty. | 
**is_enabled** | **bool** | Whether this channel is enabled for the bot | 
**is_validated** | **bool** | Whether this channel is validated for the bot | [optional] 

## Example

```python
from openapi_client.models.telegram_channel_properties import TelegramChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TelegramChannelProperties from a JSON string
telegram_channel_properties_instance = TelegramChannelProperties.from_json(json)
# print the JSON string representation of the object
print(TelegramChannelProperties.to_json())

# convert the object into a dict
telegram_channel_properties_dict = telegram_channel_properties_instance.to_dict()
# create an instance of TelegramChannelProperties from a dict
telegram_channel_properties_from_dict = TelegramChannelProperties.from_dict(telegram_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


