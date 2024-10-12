# CalendarListEntryNotificationSettings

The notifications that the authenticated user is receiving for this calendar.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notifications** | [**List[CalendarNotification]**](CalendarNotification.md) | The list of notifications set for this calendar. | [optional] 

## Example

```python
from openapi_client.models.calendar_list_entry_notification_settings import CalendarListEntryNotificationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarListEntryNotificationSettings from a JSON string
calendar_list_entry_notification_settings_instance = CalendarListEntryNotificationSettings.from_json(json)
# print the JSON string representation of the object
print(CalendarListEntryNotificationSettings.to_json())

# convert the object into a dict
calendar_list_entry_notification_settings_dict = calendar_list_entry_notification_settings_instance.to_dict()
# create an instance of CalendarListEntryNotificationSettings from a dict
calendar_list_entry_notification_settings_from_dict = CalendarListEntryNotificationSettings.from_dict(calendar_list_entry_notification_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


