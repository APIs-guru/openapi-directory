# GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse

Results for listing FeedbackThreads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback_threads** | [**List[GoogleCloudDatalabelingV1beta1FeedbackThread]**](GoogleCloudDatalabelingV1beta1FeedbackThread.md) | The list of feedback threads to return. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_list_feedback_threads_response import GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse from a JSON string
google_cloud_datalabeling_v1beta1_list_feedback_threads_response_instance = GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_list_feedback_threads_response_dict = google_cloud_datalabeling_v1beta1_list_feedback_threads_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse from a dict
google_cloud_datalabeling_v1beta1_list_feedback_threads_response_from_dict = GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse.from_dict(google_cloud_datalabeling_v1beta1_list_feedback_threads_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


