# RecurringTimeWindow

Represents an arbitrary window of time that recurs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recurrence** | **str** | An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window reccurs. They go on for the span of time between the start and end time. For example, to have something repeat every weekday, you&#39;d use: &#x60;FREQ&#x3D;WEEKLY;BYDAY&#x3D;MO,TU,WE,TH,FR&#x60; To repeat some window daily (equivalent to the DailyMaintenanceWindow): &#x60;FREQ&#x3D;DAILY&#x60; For the first weekend of every month: &#x60;FREQ&#x3D;MONTHLY;BYSETPOS&#x3D;1;BYDAY&#x3D;SA,SU&#x60; This specifies how frequently the window starts. Eg, if you wanted to have a 9-5 UTC-4 window every weekday, you&#39;d use something like: &#x60;&#x60;&#x60; start time &#x3D; 2019-01-01T09:00:00-0400 end time &#x3D; 2019-01-01T17:00:00-0400 recurrence &#x3D; FREQ&#x3D;WEEKLY;BYDAY&#x3D;MO,TU,WE,TH,FR &#x60;&#x60;&#x60; Windows can span multiple days. Eg, to make the window encompass every weekend from midnight Saturday till the last minute of Sunday UTC: &#x60;&#x60;&#x60; start time &#x3D; 2019-01-05T00:00:00Z end time &#x3D; 2019-01-07T23:59:00Z recurrence &#x3D; FREQ&#x3D;WEEKLY;BYDAY&#x3D;SA &#x60;&#x60;&#x60; Note the start and end time&#39;s specific dates are largely arbitrary except to specify duration of the window and when it first starts. The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported. | [optional] 
**window** | [**TimeWindow**](TimeWindow.md) |  | [optional] 

## Example

```python
from openapi_client.models.recurring_time_window import RecurringTimeWindow

# TODO update the JSON string below
json = "{}"
# create an instance of RecurringTimeWindow from a JSON string
recurring_time_window_instance = RecurringTimeWindow.from_json(json)
# print the JSON string representation of the object
print(RecurringTimeWindow.to_json())

# convert the object into a dict
recurring_time_window_dict = recurring_time_window_instance.to_dict()
# create an instance of RecurringTimeWindow from a dict
recurring_time_window_from_dict = RecurringTimeWindow.from_dict(recurring_time_window_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


