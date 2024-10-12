# JobStatus

Dataproc job status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Optional. Output only. Job state details, such as an error description if the state is ERROR. | [optional] [readonly] 
**state** | **str** | Output only. A state message specifying the overall job state. | [optional] [readonly] 
**state_start_time** | **str** | Output only. The time when this state was entered. | [optional] [readonly] 
**substate** | **str** | Output only. Additional state information, which includes status reported by the agent. | [optional] [readonly] 

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


