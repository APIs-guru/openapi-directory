# TimeOfDay

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours** | **int** | Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value \&quot;24:00:00\&quot; for scenarios like business closing time. | [optional] 
**minutes** | **int** | Minutes of hour of day. Must be from 0 to 59. | [optional] 
**nanos** | **int** | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. | [optional] 
**seconds** | **int** | Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. | [optional] 

## Example

```python
from openapi_client.models.time_of_day import TimeOfDay

# TODO update the JSON string below
json = "{}"
# create an instance of TimeOfDay from a JSON string
time_of_day_instance = TimeOfDay.from_json(json)
# print the JSON string representation of the object
print(TimeOfDay.to_json())

# convert the object into a dict
time_of_day_dict = time_of_day_instance.to_dict()
# create an instance of TimeOfDay from a dict
time_of_day_from_dict = TimeOfDay.from_dict(time_of_day_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


