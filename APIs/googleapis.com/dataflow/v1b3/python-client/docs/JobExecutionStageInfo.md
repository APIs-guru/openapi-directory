# JobExecutionStageInfo

Contains information about how a particular google.dataflow.v1beta3.Step will be executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**step_name** | **List[str]** | The steps associated with the execution stage. Note that stages may have several steps, and that a given step might be run by more than one stage. | [optional] 

## Example

```python
from openapi_client.models.job_execution_stage_info import JobExecutionStageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of JobExecutionStageInfo from a JSON string
job_execution_stage_info_instance = JobExecutionStageInfo.from_json(json)
# print the JSON string representation of the object
print(JobExecutionStageInfo.to_json())

# convert the object into a dict
job_execution_stage_info_dict = job_execution_stage_info_instance.to_dict()
# create an instance of JobExecutionStageInfo from a dict
job_execution_stage_info_from_dict = JobExecutionStageInfo.from_dict(job_execution_stage_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


