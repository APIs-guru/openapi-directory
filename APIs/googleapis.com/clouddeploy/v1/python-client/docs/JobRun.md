# JobRun

A `JobRun` resource in the Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advance_child_rollout_job_run** | [**AdvanceChildRolloutJobRun**](AdvanceChildRolloutJobRun.md) |  | [optional] 
**create_child_rollout_job_run** | [**CreateChildRolloutJobRun**](CreateChildRolloutJobRun.md) |  | [optional] 
**create_time** | **str** | Output only. Time at which the &#x60;JobRun&#x60; was created. | [optional] [readonly] 
**deploy_job_run** | [**DeployJobRun**](DeployJobRun.md) |  | [optional] 
**end_time** | **str** | Output only. Time at which the &#x60;JobRun&#x60; ended. | [optional] [readonly] 
**etag** | **str** | Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] [readonly] 
**job_id** | **str** | Output only. ID of the &#x60;Rollout&#x60; job this &#x60;JobRun&#x60; corresponds to. | [optional] [readonly] 
**name** | **str** | Optional. Name of the &#x60;JobRun&#x60;. Format is &#x60;projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{releases}/rollouts/{rollouts}/jobRuns/{uuid}&#x60;. | [optional] 
**phase_id** | **str** | Output only. ID of the &#x60;Rollout&#x60; phase this &#x60;JobRun&#x60; belongs in. | [optional] [readonly] 
**postdeploy_job_run** | [**PostdeployJobRun**](PostdeployJobRun.md) |  | [optional] 
**predeploy_job_run** | [**PredeployJobRun**](PredeployJobRun.md) |  | [optional] 
**start_time** | **str** | Output only. Time at which the &#x60;JobRun&#x60; was started. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the &#x60;JobRun&#x60;. | [optional] [readonly] 
**uid** | **str** | Output only. Unique identifier of the &#x60;JobRun&#x60;. | [optional] [readonly] 
**verify_job_run** | [**VerifyJobRun**](VerifyJobRun.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_run import JobRun

# TODO update the JSON string below
json = "{}"
# create an instance of JobRun from a JSON string
job_run_instance = JobRun.from_json(json)
# print the JSON string representation of the object
print(JobRun.to_json())

# convert the object into a dict
job_run_dict = job_run_instance.to_dict()
# create an instance of JobRun from a dict
job_run_from_dict = JobRun.from_dict(job_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


