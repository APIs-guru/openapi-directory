# CalendarNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | The method used to deliver the notification. The possible value is:   - \&quot;email\&quot; - Notifications are sent via email.   Required when adding a notification. | [optional] 
**type** | **str** | The type of notification. Possible values are:   - \&quot;eventCreation\&quot; - Notification sent when a new event is put on the calendar.  - \&quot;eventChange\&quot; - Notification sent when an event is changed.  - \&quot;eventCancellation\&quot; - Notification sent when an event is cancelled.  - \&quot;eventResponse\&quot; - Notification sent when an attendee responds to the event invitation.  - \&quot;agenda\&quot; - An agenda with the events of the day (sent out in the morning).   Required when adding a notification. | [optional] 

## Example

```python
from openapi_client.models.calendar_notification import CalendarNotification

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarNotification from a JSON string
calendar_notification_instance = CalendarNotification.from_json(json)
# print the JSON string representation of the object
print(CalendarNotification.to_json())

# convert the object into a dict
calendar_notification_dict = calendar_notification_instance.to_dict()
# create an instance of CalendarNotification from a dict
calendar_notification_from_dict = CalendarNotification.from_dict(calendar_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


