# GoogleCloudAiplatformV1beta1BatchDeletePipelineJobsResponse

Response message for PipelineService.BatchDeletePipelineJobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pipeline_jobs** | [**List[GoogleCloudAiplatformV1beta1PipelineJob]**](GoogleCloudAiplatformV1beta1PipelineJob.md) | PipelineJobs deleted. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_batch_delete_pipeline_jobs_response import GoogleCloudAiplatformV1beta1BatchDeletePipelineJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1BatchDeletePipelineJobsResponse from a JSON string
google_cloud_aiplatform_v1beta1_batch_delete_pipeline_jobs_response_instance = GoogleCloudAiplatformV1beta1BatchDeletePipelineJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1BatchDeletePipelineJobsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_batch_delete_pipeline_jobs_response_dict = google_cloud_aiplatform_v1beta1_batch_delete_pipeline_jobs_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1BatchDeletePipelineJobsResponse from a dict
google_cloud_aiplatform_v1beta1_batch_delete_pipeline_jobs_response_from_dict = GoogleCloudAiplatformV1beta1BatchDeletePipelineJobsResponse.from_dict(google_cloud_aiplatform_v1beta1_batch_delete_pipeline_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


