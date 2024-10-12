# GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback

Feedback for knowledge search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_copied** | **bool** | Whether the answer was copied by the human agent or not. If the value is set to be true, AnswerFeedback.clicked will be updated to be true. | [optional] 
**clicked_uris** | **List[str]** | The URIs clicked by the human agent. The value is appended for each UpdateAnswerRecordRequest. If the value is not empty, AnswerFeedback.clicked will be updated to be true. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_agent_assistant_feedback_knowledge_search_feedback import GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback from a JSON string
google_cloud_dialogflow_v2_agent_assistant_feedback_knowledge_search_feedback_instance = GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_agent_assistant_feedback_knowledge_search_feedback_dict = google_cloud_dialogflow_v2_agent_assistant_feedback_knowledge_search_feedback_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback from a dict
google_cloud_dialogflow_v2_agent_assistant_feedback_knowledge_search_feedback_from_dict = GoogleCloudDialogflowV2AgentAssistantFeedbackKnowledgeSearchFeedback.from_dict(google_cloud_dialogflow_v2_agent_assistant_feedback_knowledge_search_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


