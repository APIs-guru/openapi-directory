# Schedule

Transfers can be scheduled to recur or to run just once.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_of_day** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 
**repeat_interval** | **str** | Interval between the start of each scheduled TransferOperation. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. | [optional] 
**schedule_end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**schedule_start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**start_time_of_day** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 

## Example

```python
from openapi_client.models.schedule import Schedule

# TODO update the JSON string below
json = "{}"
# create an instance of Schedule from a JSON string
schedule_instance = Schedule.from_json(json)
# print the JSON string representation of the object
print(Schedule.to_json())

# convert the object into a dict
schedule_dict = schedule_instance.to_dict()
# create an instance of Schedule from a dict
schedule_from_dict = Schedule.from_dict(schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


