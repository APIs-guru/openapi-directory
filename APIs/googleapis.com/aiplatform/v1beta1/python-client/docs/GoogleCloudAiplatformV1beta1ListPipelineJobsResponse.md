# GoogleCloudAiplatformV1beta1ListPipelineJobsResponse

Response message for PipelineService.ListPipelineJobs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListPipelineJobsRequest.page_token to obtain that page. | [optional] 
**pipeline_jobs** | [**List[GoogleCloudAiplatformV1beta1PipelineJob]**](GoogleCloudAiplatformV1beta1PipelineJob.md) | List of PipelineJobs in the requested page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_pipeline_jobs_response import GoogleCloudAiplatformV1beta1ListPipelineJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListPipelineJobsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_pipeline_jobs_response_instance = GoogleCloudAiplatformV1beta1ListPipelineJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListPipelineJobsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_pipeline_jobs_response_dict = google_cloud_aiplatform_v1beta1_list_pipeline_jobs_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListPipelineJobsResponse from a dict
google_cloud_aiplatform_v1beta1_list_pipeline_jobs_response_from_dict = GoogleCloudAiplatformV1beta1ListPipelineJobsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_pipeline_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


