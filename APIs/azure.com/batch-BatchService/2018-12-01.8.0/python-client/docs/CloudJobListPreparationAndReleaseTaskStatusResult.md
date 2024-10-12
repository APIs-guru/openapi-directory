# CloudJobListPreparationAndReleaseTaskStatusResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[JobPreparationAndReleaseTaskExecutionInformation]**](JobPreparationAndReleaseTaskExecutionInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_job_list_preparation_and_release_task_status_result import CloudJobListPreparationAndReleaseTaskStatusResult

# TODO update the JSON string below
json = "{}"
# create an instance of CloudJobListPreparationAndReleaseTaskStatusResult from a JSON string
cloud_job_list_preparation_and_release_task_status_result_instance = CloudJobListPreparationAndReleaseTaskStatusResult.from_json(json)
# print the JSON string representation of the object
print(CloudJobListPreparationAndReleaseTaskStatusResult.to_json())

# convert the object into a dict
cloud_job_list_preparation_and_release_task_status_result_dict = cloud_job_list_preparation_and_release_task_status_result_instance.to_dict()
# create an instance of CloudJobListPreparationAndReleaseTaskStatusResult from a dict
cloud_job_list_preparation_and_release_task_status_result_from_dict = CloudJobListPreparationAndReleaseTaskStatusResult.from_dict(cloud_job_list_preparation_and_release_task_status_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


