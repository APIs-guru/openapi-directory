# GoogleCloudAiplatformV1ListNasJobsResponse

Response message for JobService.ListNasJobs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nas_jobs** | [**List[GoogleCloudAiplatformV1NasJob]**](GoogleCloudAiplatformV1NasJob.md) | List of NasJobs in the requested page. NasJob.nas_job_output of the jobs will not be returned. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListNasJobsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_nas_jobs_response import GoogleCloudAiplatformV1ListNasJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListNasJobsResponse from a JSON string
google_cloud_aiplatform_v1_list_nas_jobs_response_instance = GoogleCloudAiplatformV1ListNasJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListNasJobsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_nas_jobs_response_dict = google_cloud_aiplatform_v1_list_nas_jobs_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListNasJobsResponse from a dict
google_cloud_aiplatform_v1_list_nas_jobs_response_from_dict = GoogleCloudAiplatformV1ListNasJobsResponse.from_dict(google_cloud_aiplatform_v1_list_nas_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


