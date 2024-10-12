# GoogleCloudAiplatformV1beta1PipelineTaskDetailPipelineTaskStatus

A single record of the task status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**state** | **str** | Output only. The state of the task. | [optional] [readonly] 
**update_time** | **str** | Output only. Update time of this status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_pipeline_task_detail_pipeline_task_status import GoogleCloudAiplatformV1beta1PipelineTaskDetailPipelineTaskStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PipelineTaskDetailPipelineTaskStatus from a JSON string
google_cloud_aiplatform_v1beta1_pipeline_task_detail_pipeline_task_status_instance = GoogleCloudAiplatformV1beta1PipelineTaskDetailPipelineTaskStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PipelineTaskDetailPipelineTaskStatus.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_pipeline_task_detail_pipeline_task_status_dict = google_cloud_aiplatform_v1beta1_pipeline_task_detail_pipeline_task_status_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PipelineTaskDetailPipelineTaskStatus from a dict
google_cloud_aiplatform_v1beta1_pipeline_task_detail_pipeline_task_status_from_dict = GoogleCloudAiplatformV1beta1PipelineTaskDetailPipelineTaskStatus.from_dict(google_cloud_aiplatform_v1beta1_pipeline_task_detail_pipeline_task_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


