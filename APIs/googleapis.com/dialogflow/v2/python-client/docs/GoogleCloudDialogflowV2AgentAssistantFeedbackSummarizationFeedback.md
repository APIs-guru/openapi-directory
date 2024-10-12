# GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback

Feedback for conversation summarization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | **str** | Timestamp when composing of the summary starts. | [optional] 
**submit_time** | **str** | Timestamp when the summary was submitted. | [optional] 
**summary_text** | **str** | Text of actual submitted summary. | [optional] 
**text_sections** | **Dict[str, str]** | Optional. Actual text sections of submitted summary. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_agent_assistant_feedback_summarization_feedback import GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback from a JSON string
google_cloud_dialogflow_v2_agent_assistant_feedback_summarization_feedback_instance = GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_agent_assistant_feedback_summarization_feedback_dict = google_cloud_dialogflow_v2_agent_assistant_feedback_summarization_feedback_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback from a dict
google_cloud_dialogflow_v2_agent_assistant_feedback_summarization_feedback_from_dict = GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback.from_dict(google_cloud_dialogflow_v2_agent_assistant_feedback_summarization_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


