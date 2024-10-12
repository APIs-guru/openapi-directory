# GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsRequest

Request message for PipelineService.BatchCancelPipelineJobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | Required. The names of the PipelineJobs to cancel. A maximum of 32 PipelineJobs can be cancelled in a batch. Format: &#x60;projects/{project}/locations/{location}/pipelineJobs/{pipelineJob}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_request import GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsRequest from a JSON string
google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_request_instance = GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_request_dict = google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsRequest from a dict
google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_request_from_dict = GoogleCloudAiplatformV1beta1BatchCancelPipelineJobsRequest.from_dict(google_cloud_aiplatform_v1beta1_batch_cancel_pipeline_jobs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


