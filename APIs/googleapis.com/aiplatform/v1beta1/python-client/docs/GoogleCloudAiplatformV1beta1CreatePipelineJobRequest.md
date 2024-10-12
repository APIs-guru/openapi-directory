# GoogleCloudAiplatformV1beta1CreatePipelineJobRequest

Request message for PipelineService.CreatePipelineJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Required. The resource name of the Location to create the PipelineJob in. Format: &#x60;projects/{project}/locations/{location}&#x60; | [optional] 
**pipeline_job** | [**GoogleCloudAiplatformV1beta1PipelineJob**](GoogleCloudAiplatformV1beta1PipelineJob.md) |  | [optional] 
**pipeline_job_id** | **str** | The ID to use for the PipelineJob, which will become the final component of the PipelineJob name. If not provided, an ID will be automatically generated. This value should be less than 128 characters, and valid characters are &#x60;/a-z-/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_create_pipeline_job_request import GoogleCloudAiplatformV1beta1CreatePipelineJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1CreatePipelineJobRequest from a JSON string
google_cloud_aiplatform_v1beta1_create_pipeline_job_request_instance = GoogleCloudAiplatformV1beta1CreatePipelineJobRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1CreatePipelineJobRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_create_pipeline_job_request_dict = google_cloud_aiplatform_v1beta1_create_pipeline_job_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1CreatePipelineJobRequest from a dict
google_cloud_aiplatform_v1beta1_create_pipeline_job_request_from_dict = GoogleCloudAiplatformV1beta1CreatePipelineJobRequest.from_dict(google_cloud_aiplatform_v1beta1_create_pipeline_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


