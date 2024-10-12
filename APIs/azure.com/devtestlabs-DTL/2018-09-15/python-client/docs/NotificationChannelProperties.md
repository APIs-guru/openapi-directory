# NotificationChannelProperties

Properties of a schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | The creation date of the notification channel. | [optional] [readonly] 
**description** | **str** | Description of notification. | [optional] 
**email_recipient** | **str** | The email recipient to send notifications to (can be a list of semi-colon separated email addresses). | [optional] 
**events** | [**List[Event]**](Event.md) | The list of event for which this notification is enabled. | [optional] 
**notification_locale** | **str** | The locale to use when sending a notification (fallback for unsupported languages is EN). | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] [readonly] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] [readonly] 
**web_hook_url** | **str** | The webhook URL to send notifications to. | [optional] 

## Example

```python
from openapi_client.models.notification_channel_properties import NotificationChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationChannelProperties from a JSON string
notification_channel_properties_instance = NotificationChannelProperties.from_json(json)
# print the JSON string representation of the object
print(NotificationChannelProperties.to_json())

# convert the object into a dict
notification_channel_properties_dict = notification_channel_properties_instance.to_dict()
# create an instance of NotificationChannelProperties from a dict
notification_channel_properties_from_dict = NotificationChannelProperties.from_dict(notification_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


