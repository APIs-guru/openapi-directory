# GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse

Results for listing evaluation jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation_jobs** | [**List[GoogleCloudDatalabelingV1beta1EvaluationJob]**](GoogleCloudDatalabelingV1beta1EvaluationJob.md) | The list of evaluation jobs to return. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_list_evaluation_jobs_response import GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse from a JSON string
google_cloud_datalabeling_v1beta1_list_evaluation_jobs_response_instance = GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_list_evaluation_jobs_response_dict = google_cloud_datalabeling_v1beta1_list_evaluation_jobs_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse from a dict
google_cloud_datalabeling_v1beta1_list_evaluation_jobs_response_from_dict = GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse.from_dict(google_cloud_datalabeling_v1beta1_list_evaluation_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


