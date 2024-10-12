# JobExecution

An execution of a job

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JobExecutionProperties**](JobExecutionProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_execution import JobExecution

# TODO update the JSON string below
json = "{}"
# create an instance of JobExecution from a JSON string
job_execution_instance = JobExecution.from_json(json)
# print the JSON string representation of the object
print(JobExecution.to_json())

# convert the object into a dict
job_execution_dict = job_execution_instance.to_dict()
# create an instance of JobExecution from a dict
job_execution_from_dict = JobExecution.from_dict(job_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


