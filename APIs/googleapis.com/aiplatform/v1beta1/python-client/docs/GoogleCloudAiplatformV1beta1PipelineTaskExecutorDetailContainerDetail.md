# GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetailContainerDetail

The detail of a container execution. It contains the job names of the lifecycle of a container execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_main_jobs** | **List[str]** | Output only. The names of the previously failed CustomJob for the main container executions. The list includes the all attempts in chronological order. | [optional] [readonly] 
**failed_pre_caching_check_jobs** | **List[str]** | Output only. The names of the previously failed CustomJob for the pre-caching-check container executions. This job will be available if the PipelineJob.pipeline_spec specifies the &#x60;pre_caching_check&#x60; hook in the lifecycle events. The list includes the all attempts in chronological order. | [optional] [readonly] 
**main_job** | **str** | Output only. The name of the CustomJob for the main container execution. | [optional] [readonly] 
**pre_caching_check_job** | **str** | Output only. The name of the CustomJob for the pre-caching-check container execution. This job will be available if the PipelineJob.pipeline_spec specifies the &#x60;pre_caching_check&#x60; hook in the lifecycle events. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail_container_detail import GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetailContainerDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetailContainerDetail from a JSON string
google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail_container_detail_instance = GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetailContainerDetail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetailContainerDetail.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail_container_detail_dict = google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail_container_detail_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetailContainerDetail from a dict
google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail_container_detail_from_dict = GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetailContainerDetail.from_dict(google_cloud_aiplatform_v1beta1_pipeline_task_executor_detail_container_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


