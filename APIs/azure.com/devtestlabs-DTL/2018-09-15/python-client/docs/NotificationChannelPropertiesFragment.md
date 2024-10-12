# NotificationChannelPropertiesFragment

Properties of a schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of notification. | [optional] 
**email_recipient** | **str** | The email recipient to send notifications to (can be a list of semi-colon separated email addresses). | [optional] 
**events** | [**List[EventFragment]**](EventFragment.md) | The list of event for which this notification is enabled. | [optional] 
**notification_locale** | **str** | The locale to use when sending a notification (fallback for unsupported languages is EN). | [optional] 
**web_hook_url** | **str** | The webhook URL to send notifications to. | [optional] 

## Example

```python
from openapi_client.models.notification_channel_properties_fragment import NotificationChannelPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationChannelPropertiesFragment from a JSON string
notification_channel_properties_fragment_instance = NotificationChannelPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(NotificationChannelPropertiesFragment.to_json())

# convert the object into a dict
notification_channel_properties_fragment_dict = notification_channel_properties_fragment_instance.to_dict()
# create an instance of NotificationChannelPropertiesFragment from a dict
notification_channel_properties_fragment_from_dict = NotificationChannelPropertiesFragment.from_dict(notification_channel_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


