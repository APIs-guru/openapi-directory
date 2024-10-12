# TelegramNotificationEndpoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** | An optional description of the notification endpoint. | [optional] 
**id** | **str** |  | [optional] 
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**links** | [**NotificationEndpointBaseLinks**](NotificationEndpointBaseLinks.md) |  | [optional] 
**name** | **str** |  | 
**org_id** | **str** |  | [optional] 
**status** | **str** | The status of the endpoint. | [optional] [default to 'active']
**type** | [**NotificationEndpointType**](NotificationEndpointType.md) |  | 
**updated_at** | **datetime** |  | [optional] [readonly] 
**user_id** | **str** |  | [optional] 
**channel** | **str** | ID of the telegram channel, a chat_id in https://core.telegram.org/bots/api#sendmessage . | 
**token** | **str** | Specifies the Telegram bot token. See https://core.telegram.org/bots#creating-a-new-bot . | 

## Example

```python
from openapi_client.models.telegram_notification_endpoint import TelegramNotificationEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of TelegramNotificationEndpoint from a JSON string
telegram_notification_endpoint_instance = TelegramNotificationEndpoint.from_json(json)
# print the JSON string representation of the object
print(TelegramNotificationEndpoint.to_json())

# convert the object into a dict
telegram_notification_endpoint_dict = telegram_notification_endpoint_instance.to_dict()
# create an instance of TelegramNotificationEndpoint from a dict
telegram_notification_endpoint_from_dict = TelegramNotificationEndpoint.from_dict(telegram_notification_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


