# GoogleCloudDialogflowV2AnswerFeedback

Represents feedback the customer has about the quality & correctness of a certain answer in a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_assistant_detail_feedback** | [**GoogleCloudDialogflowV2AgentAssistantFeedback**](GoogleCloudDialogflowV2AgentAssistantFeedback.md) |  | [optional] 
**click_time** | **str** | Time when the answer/item was clicked. | [optional] 
**clicked** | **bool** | Indicates whether the answer/item was clicked by the human agent or not. Default to false. For knowledge search and knowledge assist, the answer record is considered to be clicked if the answer was copied or any URI was clicked. | [optional] 
**correctness_level** | **str** | The correctness level of the specific answer. | [optional] 
**display_time** | **str** | Time when the answer/item was displayed. | [optional] 
**displayed** | **bool** | Indicates whether the answer/item was displayed to the human agent in the agent desktop UI. Default to false. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_answer_feedback import GoogleCloudDialogflowV2AnswerFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2AnswerFeedback from a JSON string
google_cloud_dialogflow_v2_answer_feedback_instance = GoogleCloudDialogflowV2AnswerFeedback.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2AnswerFeedback.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_answer_feedback_dict = google_cloud_dialogflow_v2_answer_feedback_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2AnswerFeedback from a dict
google_cloud_dialogflow_v2_answer_feedback_from_dict = GoogleCloudDialogflowV2AnswerFeedback.from_dict(google_cloud_dialogflow_v2_answer_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


