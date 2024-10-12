# NewCrashGroupAlertingEvent

New crash group alerting event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **str** | A unique identifier for this event instance. Useful for deduplication | 
**event_timestamp** | **str** | ISO 8601 date time when event was generated | 
**properties** | **object** | Obsolete. Use emailProperties. | [optional] 
**crash_group_properties** | [**NewCrashGroupAlertingEventAllOfCrashGroupProperties**](NewCrashGroupAlertingEventAllOfCrashGroupProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.new_crash_group_alerting_event import NewCrashGroupAlertingEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NewCrashGroupAlertingEvent from a JSON string
new_crash_group_alerting_event_instance = NewCrashGroupAlertingEvent.from_json(json)
# print the JSON string representation of the object
print(NewCrashGroupAlertingEvent.to_json())

# convert the object into a dict
new_crash_group_alerting_event_dict = new_crash_group_alerting_event_instance.to_dict()
# create an instance of NewCrashGroupAlertingEvent from a dict
new_crash_group_alerting_event_from_dict = NewCrashGroupAlertingEvent.from_dict(new_crash_group_alerting_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


