# GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetail

The runtime detail of a pipeline executor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_detail** | [**GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetailContainerDetail**](GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetailContainerDetail.md) |  | [optional] 
**custom_job_detail** | [**GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetailCustomJobDetail**](GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetailCustomJobDetail.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail import GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetail from a JSON string
google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail_instance = GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetail.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail_dict = google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetail from a dict
google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail_from_dict = GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetail.from_dict(google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


