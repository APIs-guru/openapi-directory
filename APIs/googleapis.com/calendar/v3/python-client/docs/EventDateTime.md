# EventDateTime


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** | The date, in the format \&quot;yyyy-mm-dd\&quot;, if this is an all-day event. | [optional] 
**date_time** | **datetime** | The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone. | [optional] 
**time_zone** | **str** | The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. \&quot;Europe/Zurich\&quot;.) For recurring events this field is required and specifies the time zone in which the recurrence is expanded. For single events this field is optional and indicates a custom time zone for the event start/end. | [optional] 

## Example

```python
from openapi_client.models.event_date_time import EventDateTime

# TODO update the JSON string below
json = "{}"
# create an instance of EventDateTime from a JSON string
event_date_time_instance = EventDateTime.from_json(json)
# print the JSON string representation of the object
print(EventDateTime.to_json())

# convert the object into a dict
event_date_time_dict = event_date_time_instance.to_dict()
# create an instance of EventDateTime from a dict
event_date_time_from_dict = EventDateTime.from_dict(event_date_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


