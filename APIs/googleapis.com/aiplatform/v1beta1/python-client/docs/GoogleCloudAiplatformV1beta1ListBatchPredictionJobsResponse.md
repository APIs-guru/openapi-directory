# GoogleCloudAiplatformV1beta1ListBatchPredictionJobsResponse

Response message for JobService.ListBatchPredictionJobs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_prediction_jobs** | [**List[GoogleCloudAiplatformV1beta1BatchPredictionJob]**](GoogleCloudAiplatformV1beta1BatchPredictionJob.md) | List of BatchPredictionJobs in the requested page. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListBatchPredictionJobsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_batch_prediction_jobs_response import GoogleCloudAiplatformV1beta1ListBatchPredictionJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListBatchPredictionJobsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_batch_prediction_jobs_response_instance = GoogleCloudAiplatformV1beta1ListBatchPredictionJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListBatchPredictionJobsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_batch_prediction_jobs_response_dict = google_cloud_aiplatform_v1beta1_list_batch_prediction_jobs_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListBatchPredictionJobsResponse from a dict
google_cloud_aiplatform_v1beta1_list_batch_prediction_jobs_response_from_dict = GoogleCloudAiplatformV1beta1ListBatchPredictionJobsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_batch_prediction_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


