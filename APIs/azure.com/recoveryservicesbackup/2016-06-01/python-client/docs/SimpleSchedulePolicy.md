# SimpleSchedulePolicy

Simple policy schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_run_days** | **List[str]** | This list is the days of the week when the schedule runs. | [optional] 
**schedule_run_frequency** | **str** | Defines the frequency interval (daily or weekly) for the schedule policy. | [optional] 
**schedule_run_times** | **List[datetime]** | List of times, during a day, when the schedule runs. | [optional] 
**schedule_weekly_frequency** | **int** | The number of times per week the schedule runs. | [optional] 

## Example

```python
from openapi_client.models.simple_schedule_policy import SimpleSchedulePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleSchedulePolicy from a JSON string
simple_schedule_policy_instance = SimpleSchedulePolicy.from_json(json)
# print the JSON string representation of the object
print(SimpleSchedulePolicy.to_json())

# convert the object into a dict
simple_schedule_policy_dict = simple_schedule_policy_instance.to_dict()
# create an instance of SimpleSchedulePolicy from a dict
simple_schedule_policy_from_dict = SimpleSchedulePolicy.from_dict(simple_schedule_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


