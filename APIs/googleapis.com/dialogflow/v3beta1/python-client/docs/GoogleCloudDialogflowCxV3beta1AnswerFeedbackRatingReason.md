# GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason

Stores extra information about why users provided thumbs down rating.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback** | **str** | Optional. Additional feedback about the rating. This field can be populated without choosing a predefined &#x60;reason&#x60;. | [optional] 
**reason_labels** | **List[str]** | Optional. Custom reason labels for thumbs down rating provided by the user. The maximum number of labels allowed is 10 and the maximum length of a single label is 128 characters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_answer_feedback_rating_reason import GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason from a JSON string
google_cloud_dialogflow_cx_v3beta1_answer_feedback_rating_reason_instance = GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_answer_feedback_rating_reason_dict = google_cloud_dialogflow_cx_v3beta1_answer_feedback_rating_reason_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason from a dict
google_cloud_dialogflow_cx_v3beta1_answer_feedback_rating_reason_from_dict = GoogleCloudDialogflowCxV3beta1AnswerFeedbackRatingReason.from_dict(google_cloud_dialogflow_cx_v3beta1_answer_feedback_rating_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


