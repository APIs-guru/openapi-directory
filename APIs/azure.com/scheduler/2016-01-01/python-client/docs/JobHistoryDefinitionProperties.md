# JobHistoryDefinitionProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_name** | **str** | Gets the job history action name. | [optional] [readonly] 
**end_time** | **datetime** | Gets the end time for this job. | [optional] [readonly] 
**expected_execution_time** | **datetime** | Gets the expected execution time for this job. | [optional] [readonly] 
**message** | **str** | Gets the message for the job history. | [optional] [readonly] 
**repeat_count** | **int** | Gets the repeat count for the job. | [optional] [readonly] 
**retry_count** | **int** | Gets the retry count for job. | [optional] [readonly] 
**start_time** | **datetime** | Gets the start time for this job. | [optional] [readonly] 
**status** | [**JobExecutionStatus**](JobExecutionStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_history_definition_properties import JobHistoryDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobHistoryDefinitionProperties from a JSON string
job_history_definition_properties_instance = JobHistoryDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(JobHistoryDefinitionProperties.to_json())

# convert the object into a dict
job_history_definition_properties_dict = job_history_definition_properties_instance.to_dict()
# create an instance of JobHistoryDefinitionProperties from a dict
job_history_definition_properties_from_dict = JobHistoryDefinitionProperties.from_dict(job_history_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


