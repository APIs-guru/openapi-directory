# JobSchedule

Definition of the job schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets the id of the resource. | [optional] [readonly] 
**name** | **str** | Gets the name of the variable. | [optional] [readonly] 
**properties** | [**JobScheduleProperties**](JobScheduleProperties.md) |  | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_schedule import JobSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of JobSchedule from a JSON string
job_schedule_instance = JobSchedule.from_json(json)
# print the JSON string representation of the object
print(JobSchedule.to_json())

# convert the object into a dict
job_schedule_dict = job_schedule_instance.to_dict()
# create an instance of JobSchedule from a dict
job_schedule_from_dict = JobSchedule.from_dict(job_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


