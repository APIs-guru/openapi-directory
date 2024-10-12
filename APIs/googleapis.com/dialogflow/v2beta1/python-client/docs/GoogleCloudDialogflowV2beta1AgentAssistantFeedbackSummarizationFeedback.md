# GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback

Feedback for conversation summarization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_timestamp** | **str** | Timestamp when composing of the summary starts. | [optional] 
**submit_timestamp** | **str** | Timestamp when the summary was submitted. | [optional] 
**summary_text** | **str** | Text of actual submitted summary. | [optional] 
**text_sections** | **Dict[str, str]** | Optional. Actual text sections of submitted summary. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_agent_assistant_feedback_summarization_feedback import GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback from a JSON string
google_cloud_dialogflow_v2beta1_agent_assistant_feedback_summarization_feedback_instance = GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_agent_assistant_feedback_summarization_feedback_dict = google_cloud_dialogflow_v2beta1_agent_assistant_feedback_summarization_feedback_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback from a dict
google_cloud_dialogflow_v2beta1_agent_assistant_feedback_summarization_feedback_from_dict = GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback.from_dict(google_cloud_dialogflow_v2beta1_agent_assistant_feedback_summarization_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


