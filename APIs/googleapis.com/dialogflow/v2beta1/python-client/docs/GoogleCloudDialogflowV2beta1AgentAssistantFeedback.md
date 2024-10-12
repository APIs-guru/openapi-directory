# GoogleCloudDialogflowV2beta1AgentAssistantFeedback

Detail feedback of Agent Assistant result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_relevance** | **str** | Optional. Whether or not the suggested answer is relevant. For example: * Query: \&quot;Can I change my mailing address?\&quot; * Suggested document says: \&quot;Items must be returned/exchanged within 60 days of the purchase date.\&quot; * answer_relevance: AnswerRelevance.IRRELEVANT | [optional] 
**document_correctness** | **str** | Optional. Whether or not the information in the document is correct. For example: * Query: \&quot;Can I return the package in 2 days once received?\&quot; * Suggested document says: \&quot;Items must be returned/exchanged within 60 days of the purchase date.\&quot; * Ground truth: \&quot;No return or exchange is allowed.\&quot; * [document_correctness]: INCORRECT | [optional] 
**document_efficiency** | **str** | Optional. Whether or not the suggested document is efficient. For example, if the document is poorly written, hard to understand, hard to use or too long to find useful information, document_efficiency is DocumentEfficiency.INEFFICIENT. | [optional] 
**knowledge_search_feedback** | [**GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeSearchFeedback**](GoogleCloudDialogflowV2beta1AgentAssistantFeedbackKnowledgeSearchFeedback.md) |  | [optional] 
**summarization_feedback** | [**GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback**](GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_agent_assistant_feedback import GoogleCloudDialogflowV2beta1AgentAssistantFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1AgentAssistantFeedback from a JSON string
google_cloud_dialogflow_v2beta1_agent_assistant_feedback_instance = GoogleCloudDialogflowV2beta1AgentAssistantFeedback.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1AgentAssistantFeedback.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_agent_assistant_feedback_dict = google_cloud_dialogflow_v2beta1_agent_assistant_feedback_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1AgentAssistantFeedback from a dict
google_cloud_dialogflow_v2beta1_agent_assistant_feedback_from_dict = GoogleCloudDialogflowV2beta1AgentAssistantFeedback.from_dict(google_cloud_dialogflow_v2beta1_agent_assistant_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


