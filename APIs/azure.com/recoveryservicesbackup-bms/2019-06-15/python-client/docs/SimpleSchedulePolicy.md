# SimpleSchedulePolicy

Simple policy schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_run_days** | **List[str]** | List of days of week this schedule has to be run. | [optional] 
**schedule_run_frequency** | **str** | Frequency of the schedule operation of this policy. | [optional] 
**schedule_run_times** | **List[datetime]** | List of times of day this schedule has to be run. | [optional] 
**schedule_weekly_frequency** | **int** | At every number weeks this schedule has to be run. | [optional] 

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


