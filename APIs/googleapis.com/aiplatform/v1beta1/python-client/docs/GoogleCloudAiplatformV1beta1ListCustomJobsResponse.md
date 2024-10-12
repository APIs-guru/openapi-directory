# GoogleCloudAiplatformV1beta1ListCustomJobsResponse

Response message for JobService.ListCustomJobs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_jobs** | [**List[GoogleCloudAiplatformV1beta1CustomJob]**](GoogleCloudAiplatformV1beta1CustomJob.md) | List of CustomJobs in the requested page. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListCustomJobsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_custom_jobs_response import GoogleCloudAiplatformV1beta1ListCustomJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListCustomJobsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_custom_jobs_response_instance = GoogleCloudAiplatformV1beta1ListCustomJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListCustomJobsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_custom_jobs_response_dict = google_cloud_aiplatform_v1beta1_list_custom_jobs_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListCustomJobsResponse from a dict
google_cloud_aiplatform_v1beta1_list_custom_jobs_response_from_dict = GoogleCloudAiplatformV1beta1ListCustomJobsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_custom_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


