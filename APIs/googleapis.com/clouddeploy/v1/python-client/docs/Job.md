# Job

Job represents an operation for a `Rollout`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advance_child_rollout_job** | **object** | An advanceChildRollout Job. | [optional] 
**create_child_rollout_job** | **object** | A createChildRollout Job. | [optional] 
**deploy_job** | **object** | A deploy Job. | [optional] 
**id** | **str** | Output only. The ID of the Job. | [optional] [readonly] 
**job_run** | **str** | Output only. The name of the &#x60;JobRun&#x60; responsible for the most recent invocation of this Job. | [optional] [readonly] 
**postdeploy_job** | [**PostdeployJob**](PostdeployJob.md) |  | [optional] 
**predeploy_job** | [**PredeployJob**](PredeployJob.md) |  | [optional] 
**skip_message** | **str** | Output only. Additional information on why the Job was skipped, if available. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the Job. | [optional] [readonly] 
**verify_job** | **object** | A verify Job. | [optional] 

## Example

```python
from openapi_client.models.job import Job

# TODO update the JSON string below
json = "{}"
# create an instance of Job from a JSON string
job_instance = Job.from_json(json)
# print the JSON string representation of the object
print(Job.to_json())

# convert the object into a dict
job_dict = job_instance.to_dict()
# create an instance of Job from a dict
job_from_dict = Job.from_dict(job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


