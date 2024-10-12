# JobStepProperties

Properties of a job step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**JobStepAction**](JobStepAction.md) |  | 
**credential** | **str** | The resource ID of the job credential that will be used to connect to the targets. | 
**execution_options** | [**JobStepExecutionOptions**](JobStepExecutionOptions.md) |  | [optional] 
**output** | [**JobStepOutput**](JobStepOutput.md) |  | [optional] 
**step_id** | **int** | The job step&#39;s index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified. | [optional] 
**target_group** | **str** | The resource ID of the target group that the job step will be executed on. | 

## Example

```python
from openapi_client.models.job_step_properties import JobStepProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobStepProperties from a JSON string
job_step_properties_instance = JobStepProperties.from_json(json)
# print the JSON string representation of the object
print(JobStepProperties.to_json())

# convert the object into a dict
job_step_properties_dict = job_step_properties_instance.to_dict()
# create an instance of JobStepProperties from a dict
job_step_properties_from_dict = JobStepProperties.from_dict(job_step_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


