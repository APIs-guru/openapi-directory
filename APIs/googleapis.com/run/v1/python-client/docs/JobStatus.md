# JobStatus

JobStatus represents the current state of a Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[GoogleCloudRunV1Condition]**](GoogleCloudRunV1Condition.md) | Conditions communicate information about ongoing/complete reconciliation processes that bring the \&quot;spec\&quot; inline with the observed state of the world. Job-specific conditions include: * &#x60;Ready&#x60;: &#x60;True&#x60; when the job is ready to be executed. | [optional] 
**execution_count** | **int** | Number of executions created for this job. | [optional] 
**latest_created_execution** | [**ExecutionReference**](ExecutionReference.md) |  | [optional] 
**observed_generation** | **int** | The &#39;generation&#39; of the job that was last processed by the controller. | [optional] 

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


