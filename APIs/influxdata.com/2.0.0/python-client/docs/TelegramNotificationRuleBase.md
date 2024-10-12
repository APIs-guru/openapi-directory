# TelegramNotificationRuleBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_web_page_preview** | **bool** | Disables preview of web links in the sent messages when \&quot;true\&quot;. Defaults to \&quot;false\&quot; . | [optional] 
**message_template** | **str** | The message template as a flux interpolated string. | 
**parse_mode** | **str** | Parse mode of the message text per https://core.telegram.org/bots/api#formatting-options . Defaults to \&quot;MarkdownV2\&quot; . | [optional] 
**type** | **str** | The discriminator between other types of notification rules is \&quot;telegram\&quot;. | 

## Example

```python
from openapi_client.models.telegram_notification_rule_base import TelegramNotificationRuleBase

# TODO update the JSON string below
json = "{}"
# create an instance of TelegramNotificationRuleBase from a JSON string
telegram_notification_rule_base_instance = TelegramNotificationRuleBase.from_json(json)
# print the JSON string representation of the object
print(TelegramNotificationRuleBase.to_json())

# convert the object into a dict
telegram_notification_rule_base_dict = telegram_notification_rule_base_instance.to_dict()
# create an instance of TelegramNotificationRuleBase from a dict
telegram_notification_rule_base_from_dict = TelegramNotificationRuleBase.from_dict(telegram_notification_rule_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


