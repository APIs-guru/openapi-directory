# ScheduledEventsProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terminate_notification_profile** | [**TerminateNotificationProfile**](TerminateNotificationProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.scheduled_events_profile import ScheduledEventsProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledEventsProfile from a JSON string
scheduled_events_profile_instance = ScheduledEventsProfile.from_json(json)
# print the JSON string representation of the object
print(ScheduledEventsProfile.to_json())

# convert the object into a dict
scheduled_events_profile_dict = scheduled_events_profile_instance.to_dict()
# create an instance of ScheduledEventsProfile from a dict
scheduled_events_profile_from_dict = ScheduledEventsProfile.from_dict(scheduled_events_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


