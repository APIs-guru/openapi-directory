# GoogleCloudAiplatformV1ListDataLabelingJobsResponse

Response message for JobService.ListDataLabelingJobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_labeling_jobs** | [**List[GoogleCloudAiplatformV1DataLabelingJob]**](GoogleCloudAiplatformV1DataLabelingJob.md) | A list of DataLabelingJobs that matches the specified filter in the request. | [optional] 
**next_page_token** | **str** | The standard List next-page token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_data_labeling_jobs_response import GoogleCloudAiplatformV1ListDataLabelingJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListDataLabelingJobsResponse from a JSON string
google_cloud_aiplatform_v1_list_data_labeling_jobs_response_instance = GoogleCloudAiplatformV1ListDataLabelingJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListDataLabelingJobsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_data_labeling_jobs_response_dict = google_cloud_aiplatform_v1_list_data_labeling_jobs_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListDataLabelingJobsResponse from a dict
google_cloud_aiplatform_v1_list_data_labeling_jobs_response_from_dict = GoogleCloudAiplatformV1ListDataLabelingJobsResponse.from_dict(google_cloud_aiplatform_v1_list_data_labeling_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


