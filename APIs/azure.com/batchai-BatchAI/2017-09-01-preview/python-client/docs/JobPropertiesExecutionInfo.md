# JobPropertiesExecutionInfo

Contains information about the execution of a job in the Azure Batch service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | This property is only returned if the job is in completed state. | [optional] 
**errors** | [**List[BatchAIError]**](BatchAIError.md) |  | [optional] 
**exit_code** | **int** | This property is only returned if the job is in completed state. | [optional] 
**start_time** | **datetime** | &#39;Running&#39; corresponds to the running state. If the job has been restarted or retried, this is the most recent time at which the job started running. This property is present only for job that are in the running or completed state. | 

## Example

```python
from openapi_client.models.job_properties_execution_info import JobPropertiesExecutionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of JobPropertiesExecutionInfo from a JSON string
job_properties_execution_info_instance = JobPropertiesExecutionInfo.from_json(json)
# print the JSON string representation of the object
print(JobPropertiesExecutionInfo.to_json())

# convert the object into a dict
job_properties_execution_info_dict = job_properties_execution_info_instance.to_dict()
# create an instance of JobPropertiesExecutionInfo from a dict
job_properties_execution_info_from_dict = JobPropertiesExecutionInfo.from_dict(job_properties_execution_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


