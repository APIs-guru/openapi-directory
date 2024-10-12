# NotificationSettingsFragment

Notification settings for a schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | If notifications are enabled for this schedule (i.e. Enabled, Disabled). | [optional] 
**time_in_minutes** | **int** | Time in minutes before event at which notification will be sent. | [optional] 
**webhook_url** | **str** | The webhook URL to which the notification will be sent. | [optional] 

## Example

```python
from openapi_client.models.notification_settings_fragment import NotificationSettingsFragment

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSettingsFragment from a JSON string
notification_settings_fragment_instance = NotificationSettingsFragment.from_json(json)
# print the JSON string representation of the object
print(NotificationSettingsFragment.to_json())

# convert the object into a dict
notification_settings_fragment_dict = notification_settings_fragment_instance.to_dict()
# create an instance of NotificationSettingsFragment from a dict
notification_settings_fragment_from_dict = NotificationSettingsFragment.from_dict(notification_settings_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


