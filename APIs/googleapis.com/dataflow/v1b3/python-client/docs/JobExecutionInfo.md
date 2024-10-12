# JobExecutionInfo

Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stages** | [**Dict[str, JobExecutionStageInfo]**](JobExecutionStageInfo.md) | A mapping from each stage to the information about that stage. | [optional] 

## Example

```python
from openapi_client.models.job_execution_info import JobExecutionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of JobExecutionInfo from a JSON string
job_execution_info_instance = JobExecutionInfo.from_json(json)
# print the JSON string representation of the object
print(JobExecutionInfo.to_json())

# convert the object into a dict
job_execution_info_dict = job_execution_info_instance.to_dict()
# create an instance of JobExecutionInfo from a dict
job_execution_info_from_dict = JobExecutionInfo.from_dict(job_execution_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


