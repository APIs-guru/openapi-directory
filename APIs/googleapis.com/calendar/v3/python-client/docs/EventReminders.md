# EventReminders

Information about the event's reminders for the authenticated user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**List[EventReminder]**](EventReminder.md) | If the event doesn&#39;t use the default reminders, this lists the reminders specific to the event, or, if not set, indicates that no reminders are set for this event. The maximum number of override reminders is 5. | [optional] 
**use_default** | **bool** | Whether the default reminders of the calendar apply to the event. | [optional] 

## Example

```python
from openapi_client.models.event_reminders import EventReminders

# TODO update the JSON string below
json = "{}"
# create an instance of EventReminders from a JSON string
event_reminders_instance = EventReminders.from_json(json)
# print the JSON string representation of the object
print(EventReminders.to_json())

# convert the object into a dict
event_reminders_dict = event_reminders_instance.to_dict()
# create an instance of EventReminders from a dict
event_reminders_from_dict = EventReminders.from_dict(event_reminders_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


