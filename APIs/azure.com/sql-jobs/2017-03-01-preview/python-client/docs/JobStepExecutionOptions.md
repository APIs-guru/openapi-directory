# JobStepExecutionOptions

The execution options of a job step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_retry_interval_seconds** | **int** | Initial delay between retries for job step execution. | [optional] [default to 1]
**maximum_retry_interval_seconds** | **int** | The maximum amount of time to wait between retries for job step execution. | [optional] [default to 120]
**retry_attempts** | **int** | Maximum number of times the job step will be reattempted if the first attempt fails. | [optional] [default to 10]
**retry_interval_backoff_multiplier** | **float** | The backoff multiplier for the time between retries. | [optional] [default to 2.0]
**timeout_seconds** | **int** | Execution timeout for the job step. | [optional] [default to 43200]

## Example

```python
from openapi_client.models.job_step_execution_options import JobStepExecutionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of JobStepExecutionOptions from a JSON string
job_step_execution_options_instance = JobStepExecutionOptions.from_json(json)
# print the JSON string representation of the object
print(JobStepExecutionOptions.to_json())

# convert the object into a dict
job_step_execution_options_dict = job_step_execution_options_instance.to_dict()
# create an instance of JobStepExecutionOptions from a dict
job_step_execution_options_from_dict = JobStepExecutionOptions.from_dict(job_step_execution_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


