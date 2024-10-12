# JobExecutionTarget

The target that a job execution is executed on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | The database name. | [optional] [readonly] 
**server_name** | **str** | The server name. | [optional] [readonly] 
**type** | **str** | The type of the target. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_execution_target import JobExecutionTarget

# TODO update the JSON string below
json = "{}"
# create an instance of JobExecutionTarget from a JSON string
job_execution_target_instance = JobExecutionTarget.from_json(json)
# print the JSON string representation of the object
print(JobExecutionTarget.to_json())

# convert the object into a dict
job_execution_target_dict = job_execution_target_instance.to_dict()
# create an instance of JobExecutionTarget from a dict
job_execution_target_from_dict = JobExecutionTarget.from_dict(job_execution_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


