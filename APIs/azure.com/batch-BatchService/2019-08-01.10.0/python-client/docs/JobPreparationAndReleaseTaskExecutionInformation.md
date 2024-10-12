# JobPreparationAndReleaseTaskExecutionInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_preparation_task_execution_info** | [**JobPreparationTaskExecutionInformation**](JobPreparationTaskExecutionInformation.md) |  | [optional] 
**job_release_task_execution_info** | [**JobReleaseTaskExecutionInformation**](JobReleaseTaskExecutionInformation.md) |  | [optional] 
**node_id** | **str** |  | [optional] 
**node_url** | **str** |  | [optional] 
**pool_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.job_preparation_and_release_task_execution_information import JobPreparationAndReleaseTaskExecutionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of JobPreparationAndReleaseTaskExecutionInformation from a JSON string
job_preparation_and_release_task_execution_information_instance = JobPreparationAndReleaseTaskExecutionInformation.from_json(json)
# print the JSON string representation of the object
print(JobPreparationAndReleaseTaskExecutionInformation.to_json())

# convert the object into a dict
job_preparation_and_release_task_execution_information_dict = job_preparation_and_release_task_execution_information_instance.to_dict()
# create an instance of JobPreparationAndReleaseTaskExecutionInformation from a dict
job_preparation_and_release_task_execution_information_from_dict = JobPreparationAndReleaseTaskExecutionInformation.from_dict(job_preparation_and_release_task_execution_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


