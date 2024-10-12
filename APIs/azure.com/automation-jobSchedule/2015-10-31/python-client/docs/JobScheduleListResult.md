# JobScheduleListResult

The response model for the list job schedule operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[JobSchedule]**](JobSchedule.md) | Gets or sets a list of job schedules. | [optional] 

## Example

```python
from openapi_client.models.job_schedule_list_result import JobScheduleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobScheduleListResult from a JSON string
job_schedule_list_result_instance = JobScheduleListResult.from_json(json)
# print the JSON string representation of the object
print(JobScheduleListResult.to_json())

# convert the object into a dict
job_schedule_list_result_dict = job_schedule_list_result_instance.to_dict()
# create an instance of JobScheduleListResult from a dict
job_schedule_list_result_from_dict = JobScheduleListResult.from_dict(job_schedule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


