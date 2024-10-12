# Schedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **str** | The end date, inclusive, of the schedule period. | 
**id** | **str** | A unique identifier for an object. | [readonly] 
**start_date** | **str** | The start date, inclusive, of the schedule period. | 
**work_pattern** | [**ScheduleWorkPattern**](ScheduleWorkPattern.md) |  | 

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


