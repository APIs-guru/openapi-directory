# JobExecutionProperties

Properties for an Azure SQL Database Elastic job execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **datetime** | The time that the job execution was created. | [optional] [readonly] 
**current_attempt_start_time** | **datetime** | Start time of the current attempt. | [optional] [readonly] 
**current_attempts** | **int** | Number of times the job execution has been attempted. | [optional] 
**end_time** | **datetime** | The time that the job execution completed. | [optional] [readonly] 
**job_execution_id** | **str** | The unique identifier of the job execution. | [optional] [readonly] 
**job_version** | **int** | The job version number. | [optional] [readonly] 
**last_message** | **str** | The last status or error message. | [optional] [readonly] 
**lifecycle** | **str** | The detailed state of the job execution. | [optional] [readonly] 
**provisioning_state** | **str** | The ARM provisioning state of the job execution. | [optional] [readonly] 
**start_time** | **datetime** | The time that the job execution started. | [optional] [readonly] 
**step_id** | **int** | The job step id. | [optional] [readonly] 
**step_name** | **str** | The job step name. | [optional] [readonly] 
**target** | [**JobExecutionTarget**](JobExecutionTarget.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_execution_properties import JobExecutionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobExecutionProperties from a JSON string
job_execution_properties_instance = JobExecutionProperties.from_json(json)
# print the JSON string representation of the object
print(JobExecutionProperties.to_json())

# convert the object into a dict
job_execution_properties_dict = job_execution_properties_instance.to_dict()
# create an instance of JobExecutionProperties from a dict
job_execution_properties_from_dict = JobExecutionProperties.from_dict(job_execution_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


