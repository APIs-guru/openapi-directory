# TimePeriod

Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**close_day** | **str** | Indicates the day of the week this period ends on. | [optional] 
**close_time** | **str** | Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. | [optional] 
**open_day** | **str** | Indicates the day of the week this period starts on. | [optional] 
**open_time** | **str** | Time in 24hr ISO 8601 extended format (hh:mm). Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. | [optional] 

## Example

```python
from openapi_client.models.time_period import TimePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of TimePeriod from a JSON string
time_period_instance = TimePeriod.from_json(json)
# print the JSON string representation of the object
print(TimePeriod.to_json())

# convert the object into a dict
time_period_dict = time_period_instance.to_dict()
# create an instance of TimePeriod from a dict
time_period_from_dict = TimePeriod.from_dict(time_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


