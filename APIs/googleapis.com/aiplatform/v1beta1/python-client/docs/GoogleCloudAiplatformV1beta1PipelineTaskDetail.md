# GoogleCloudAiplatformV1beta1PipelineTaskDetail

The runtime detail of a task execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Task create time. | [optional] [readonly] 
**end_time** | **str** | Output only. Task end time. | [optional] [readonly] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**execution** | [**GoogleCloudAiplatformV1beta1Execution**](GoogleCloudAiplatformV1beta1Execution.md) |  | [optional] 
**executor_detail** | [**GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetail**](GoogleCloudAiplatformV1beta1PipelineTaskExecutorDetail.md) |  | [optional] 
**inputs** | [**Dict[str, GoogleCloudAiplatformV1beta1PipelineTaskDetailArtifactList]**](GoogleCloudAiplatformV1beta1PipelineTaskDetailArtifactList.md) | Output only. The runtime input artifacts of the task. | [optional] [readonly] 
**outputs** | [**Dict[str, GoogleCloudAiplatformV1beta1PipelineTaskDetailArtifactList]**](GoogleCloudAiplatformV1beta1PipelineTaskDetailArtifactList.md) | Output only. The runtime output artifacts of the task. | [optional] [readonly] 
**parent_task_id** | **str** | Output only. The id of the parent task if the task is within a component scope. Empty if the task is at the root level. | [optional] [readonly] 
**pipeline_task_status** | [**List[GoogleCloudAiplatformV1beta1PipelineTaskDetailPipelineTaskStatus]**](GoogleCloudAiplatformV1beta1PipelineTaskDetailPipelineTaskStatus.md) | Output only. A list of task status. This field keeps a record of task status evolving over time. | [optional] [readonly] 
**start_time** | **str** | Output only. Task start time. | [optional] [readonly] 
**state** | **str** | Output only. State of the task. | [optional] [readonly] 
**task_id** | **str** | Output only. The system generated ID of the task. | [optional] [readonly] 
**task_name** | **str** | Output only. The user specified name of the task that is defined in pipeline_spec. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_pipeline_task_detail import GoogleCloudAiplatformV1beta1PipelineTaskDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PipelineTaskDetail from a JSON string
google_cloud_aiplatform_v1beta1_pipeline_task_detail_instance = GoogleCloudAiplatformV1beta1PipelineTaskDetail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PipelineTaskDetail.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_pipeline_task_detail_dict = google_cloud_aiplatform_v1beta1_pipeline_task_detail_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PipelineTaskDetail from a dict
google_cloud_aiplatform_v1beta1_pipeline_task_detail_from_dict = GoogleCloudAiplatformV1beta1PipelineTaskDetail.from_dict(google_cloud_aiplatform_v1beta1_pipeline_task_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


