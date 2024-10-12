# GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsResponse

Response message for PipelineService.BatchCancelPipelineJobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pipeline_jobs** | [**List[GoogleCloudAiplatformV1beta1PipelineJob]**](GoogleCloudAiplatformV1beta1PipelineJob.md) | PipelineJobs cancelled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_response import GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsResponse from a JSON string
google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_response_instance = GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_response_dict = google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsResponse from a dict
google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_response_from_dict = GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsResponse.from_dict(google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


