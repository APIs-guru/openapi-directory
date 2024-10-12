# JobExecutionListResult

A list of job executions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[JobExecution]**](JobExecution.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_execution_list_result import JobExecutionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobExecutionListResult from a JSON string
job_execution_list_result_instance = JobExecutionListResult.from_json(json)
# print the JSON string representation of the object
print(JobExecutionListResult.to_json())

# convert the object into a dict
job_execution_list_result_dict = job_execution_list_result_instance.to_dict()
# create an instance of JobExecutionListResult from a dict
job_execution_list_result_from_dict = JobExecutionListResult.from_dict(job_execution_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


