# JobStepOutput

The output configuration of a job step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential** | **str** | The resource ID of the credential to use to connect to the output destination. | 
**database_name** | **str** | The output destination database. | 
**resource_group_name** | **str** | The output destination resource group. | [optional] 
**schema_name** | **str** | The output destination schema. | [optional] [default to 'dbo']
**server_name** | **str** | The output destination server name. | 
**subscription_id** | **str** | The output destination subscription id. | [optional] 
**table_name** | **str** | The output destination table. | 
**type** | **str** | The output destination type. | [optional] [default to 'SqlDatabase']

## Example

```python
from openapi_client.models.job_step_output import JobStepOutput

# TODO update the JSON string below
json = "{}"
# create an instance of JobStepOutput from a JSON string
job_step_output_instance = JobStepOutput.from_json(json)
# print the JSON string representation of the object
print(JobStepOutput.to_json())

# convert the object into a dict
job_step_output_dict = job_step_output_instance.to_dict()
# create an instance of JobStepOutput from a dict
job_step_output_from_dict = JobStepOutput.from_dict(job_step_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


