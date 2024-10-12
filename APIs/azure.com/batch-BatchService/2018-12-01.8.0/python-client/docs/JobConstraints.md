# JobConstraints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_task_retry_count** | **int** | Note that this value specifically controls the number of retries. The Batch service will try each task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry tasks. If the maximum retry count is -1, the Batch service retries tasks without limit. The default value is 0 (no retries). | [optional] 
**max_wall_clock_time** | **str** | If the job does not complete within the time limit, the Batch service terminates it and any tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the job may run. | [optional] 

## Example

```python
from openapi_client.models.job_constraints import JobConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of JobConstraints from a JSON string
job_constraints_instance = JobConstraints.from_json(json)
# print the JSON string representation of the object
print(JobConstraints.to_json())

# convert the object into a dict
job_constraints_dict = job_constraints_instance.to_dict()
# create an instance of JobConstraints from a dict
job_constraints_from_dict = JobConstraints.from_dict(job_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


