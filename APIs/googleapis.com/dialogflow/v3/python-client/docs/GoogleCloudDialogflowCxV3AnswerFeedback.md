# GoogleCloudDialogflowCxV3AnswerFeedback

Stores information about feedback provided by users about a response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_rating** | **str** | Optional. Custom rating from the user about the provided answer, with maximum length of 1024 characters. For example, client could use a customized JSON object to indicate the rating. | [optional] 
**rating** | **str** | Optional. Rating from user for the specific Dialogflow response. | [optional] 
**rating_reason** | [**GoogleCloudDialogflowCxV3AnswerFeedbackRatingReason**](GoogleCloudDialogflowCxV3AnswerFeedbackRatingReason.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_answer_feedback import GoogleCloudDialogflowCxV3AnswerFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3AnswerFeedback from a JSON string
google_cloud_dialogflow_cx_v3_answer_feedback_instance = GoogleCloudDialogflowCxV3AnswerFeedback.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3AnswerFeedback.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_answer_feedback_dict = google_cloud_dialogflow_cx_v3_answer_feedback_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3AnswerFeedback from a dict
google_cloud_dialogflow_cx_v3_answer_feedback_from_dict = GoogleCloudDialogflowCxV3AnswerFeedback.from_dict(google_cloud_dialogflow_cx_v3_answer_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


