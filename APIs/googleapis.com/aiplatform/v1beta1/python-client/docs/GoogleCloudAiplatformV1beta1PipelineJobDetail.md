# GoogleCloudAiplatformV1beta1PipelineJobDetail

The runtime detail of PipelineJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pipeline_context** | [**GoogleCloudAiplatformV1beta1Context**](GoogleCloudAiplatformV1beta1Context.md) |  | [optional] 
**pipeline_run_context** | [**GoogleCloudAiplatformV1beta1Context**](GoogleCloudAiplatformV1beta1Context.md) |  | [optional] 
**task_details** | [**List[GoogleCloudAiplatformV1beta1PipelineTaskDetail]**](GoogleCloudAiplatformV1beta1PipelineTaskDetail.md) | Output only. The runtime details of the tasks under the pipeline. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_pipeline_job_detail import GoogleCloudAiplatformV1beta1PipelineJobDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PipelineJobDetail from a JSON string
google_cloud_aiplatform_v1beta1_pipeline_job_detail_instance = GoogleCloudAiplatformV1beta1PipelineJobDetail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PipelineJobDetail.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_pipeline_job_detail_dict = google_cloud_aiplatform_v1beta1_pipeline_job_detail_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PipelineJobDetail from a dict
google_cloud_aiplatform_v1beta1_pipeline_job_detail_from_dict = GoogleCloudAiplatformV1beta1PipelineJobDetail.from_dict(google_cloud_aiplatform_v1beta1_pipeline_job_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


