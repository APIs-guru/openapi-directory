# ChaosScheduleJob

Defines a repetition rule and parameters of Chaos to be used with the Chaos Schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chaos_parameters** | **str** | A reference to which Chaos Parameters of the Chaos Schedule to use. | [optional] 
**days** | [**ChaosScheduleJobActiveDaysOfWeek**](ChaosScheduleJobActiveDaysOfWeek.md) |  | [optional] 
**times** | [**List[TimeRange]**](TimeRange.md) | A list of Time Ranges that specify when during active days that this job will run. The times are interpreted as UTC. | [optional] 

## Example

```python
from openapi_client.models.chaos_schedule_job import ChaosScheduleJob

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosScheduleJob from a JSON string
chaos_schedule_job_instance = ChaosScheduleJob.from_json(json)
# print the JSON string representation of the object
print(ChaosScheduleJob.to_json())

# convert the object into a dict
chaos_schedule_job_dict = chaos_schedule_job_instance.to_dict()
# create an instance of ChaosScheduleJob from a dict
chaos_schedule_job_from_dict = ChaosScheduleJob.from_dict(chaos_schedule_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


