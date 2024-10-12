# Schedule

Configure the schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | **str** | Allows to define schedule that runs specified day of the week. | [optional] 
**duration** | **str** | Output only. Duration of the time window, set by service producer. | [optional] 
**start_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 

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


