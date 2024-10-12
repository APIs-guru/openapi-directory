# JobStatus

Job status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_duration** | **str** | The duration of time that the Job spent in status RUNNING. | [optional] 
**state** | **str** | Job state | [optional] 
**status_events** | [**List[StatusEvent]**](StatusEvent.md) | Job status events | [optional] 
**task_groups** | [**Dict[str, TaskGroupStatus]**](TaskGroupStatus.md) | Aggregated task status for each TaskGroup in the Job. The map key is TaskGroup ID. | [optional] 

## Example

```python
from openapi_client.models.job_status import JobStatus

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatus from a JSON string
job_status_instance = JobStatus.from_json(json)
# print the JSON string representation of the object
print(JobStatus.to_json())

# convert the object into a dict
job_status_dict = job_status_instance.to_dict()
# create an instance of JobStatus from a dict
job_status_from_dict = JobStatus.from_dict(job_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


