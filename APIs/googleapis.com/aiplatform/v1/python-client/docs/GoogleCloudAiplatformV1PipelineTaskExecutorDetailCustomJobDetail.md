# GoogleCloudAiplatformV1PipelineTaskExecutorDetailCustomJobDetail

The detailed info for a custom job executor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_jobs** | **List[str]** | Output only. The names of the previously failed CustomJob. The list includes the all attempts in chronological order. | [optional] [readonly] 
**job** | **str** | Output only. The name of the CustomJob. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_pipeline_task_executor_detail_custom_job_detail import GoogleCloudAiplatformV1PipelineTaskExecutorDetailCustomJobDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PipelineTaskExecutorDetailCustomJobDetail from a JSON string
google_cloud_aiplatform_v1_pipeline_task_executor_detail_custom_job_detail_instance = GoogleCloudAiplatformV1PipelineTaskExecutorDetailCustomJobDetail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PipelineTaskExecutorDetailCustomJobDetail.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_pipeline_task_executor_detail_custom_job_detail_dict = google_cloud_aiplatform_v1_pipeline_task_executor_detail_custom_job_detail_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PipelineTaskExecutorDetailCustomJobDetail from a dict
google_cloud_aiplatform_v1_pipeline_task_executor_detail_custom_job_detail_from_dict = GoogleCloudAiplatformV1PipelineTaskExecutorDetailCustomJobDetail.from_dict(google_cloud_aiplatform_v1_pipeline_task_executor_detail_custom_job_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


