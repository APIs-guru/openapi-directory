# GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest

The request to set the feedback for a bot answer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_feedback** | [**GoogleCloudDialogflowCxV3AnswerFeedback**](GoogleCloudDialogflowCxV3AnswerFeedback.md) |  | [optional] 
**response_id** | **str** | Required. ID of the response to update its feedback. This is the same as DetectIntentResponse.response_id. | [optional] 
**update_mask** | **str** | Optional. The mask to control which fields to update. If the mask is not present, all fields will be updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_submit_answer_feedback_request import GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest from a JSON string
google_cloud_dialogflow_cx_v3_submit_answer_feedback_request_instance = GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_submit_answer_feedback_request_dict = google_cloud_dialogflow_cx_v3_submit_answer_feedback_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest from a dict
google_cloud_dialogflow_cx_v3_submit_answer_feedback_request_from_dict = GoogleCloudDialogflowCxV3SubmitAnswerFeedbackRequest.from_dict(google_cloud_dialogflow_cx_v3_submit_answer_feedback_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


