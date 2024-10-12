# FreeBusyCalendar


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**busy** | [**List[TimePeriod]**](TimePeriod.md) | List of time ranges during which this calendar should be regarded as busy. | [optional] 
**errors** | [**List[Error]**](Error.md) | Optional error(s) (if computation for the calendar failed). | [optional] 

## Example

```python
from openapi_client.models.free_busy_calendar import FreeBusyCalendar

# TODO update the JSON string below
json = "{}"
# create an instance of FreeBusyCalendar from a JSON string
free_busy_calendar_instance = FreeBusyCalendar.from_json(json)
# print the JSON string representation of the object
print(FreeBusyCalendar.to_json())

# convert the object into a dict
free_busy_calendar_dict = free_busy_calendar_instance.to_dict()
# create an instance of FreeBusyCalendar from a dict
free_busy_calendar_from_dict = FreeBusyCalendar.from_dict(free_busy_calendar_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


