# GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse

Results for listing FeedbackMessages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback_messages** | [**List[GoogleCloudDatalabelingV1beta1FeedbackMessage]**](GoogleCloudDatalabelingV1beta1FeedbackMessage.md) | The list of feedback messages to return. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_list_feedback_messages_response import GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse from a JSON string
google_cloud_datalabeling_v1beta1_list_feedback_messages_response_instance = GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_list_feedback_messages_response_dict = google_cloud_datalabeling_v1beta1_list_feedback_messages_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse from a dict
google_cloud_datalabeling_v1beta1_list_feedback_messages_response_from_dict = GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse.from_dict(google_cloud_datalabeling_v1beta1_list_feedback_messages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


