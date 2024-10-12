# GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback

The feedback that the customer has about a certain answer in the conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicked** | **bool** | Indicates whether an answer or item was clicked by the human agent. | [optional] 
**correctness_level** | **str** | The correctness level of an answer. | [optional] 
**displayed** | **bool** | Indicates whether an answer or item was displayed to the human agent in the agent desktop UI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_answer_feedback import GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback from a JSON string
google_cloud_contactcenterinsights_v1alpha1_answer_feedback_instance = GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_answer_feedback_dict = google_cloud_contactcenterinsights_v1alpha1_answer_feedback_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback from a dict
google_cloud_contactcenterinsights_v1alpha1_answer_feedback_from_dict = GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback.from_dict(google_cloud_contactcenterinsights_v1alpha1_answer_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


