# EventReminder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | The method used by this reminder. Possible values are:   - \&quot;email\&quot; - Reminders are sent via email.  - \&quot;popup\&quot; - Reminders are sent via a UI popup.   Required when adding a reminder. | [optional] 
**minutes** | **int** | Number of minutes before the start of the event when the reminder should trigger. Valid values are between 0 and 40320 (4 weeks in minutes). Required when adding a reminder. | [optional] 

## Example

```python
from openapi_client.models.event_reminder import EventReminder

# TODO update the JSON string below
json = "{}"
# create an instance of EventReminder from a JSON string
event_reminder_instance = EventReminder.from_json(json)
# print the JSON string representation of the object
print(EventReminder.to_json())

# convert the object into a dict
event_reminder_dict = event_reminder_instance.to_dict()
# create an instance of EventReminder from a dict
event_reminder_from_dict = EventReminder.from_dict(event_reminder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


