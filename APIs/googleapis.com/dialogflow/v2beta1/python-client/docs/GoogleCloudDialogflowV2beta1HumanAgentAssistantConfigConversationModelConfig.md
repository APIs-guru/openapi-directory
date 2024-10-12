# GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig

Custom conversation models used in agent assist feature. Supported feature: ARTICLE_SUGGESTION, SMART_COMPOSE, SMART_REPLY, CONVERSATION_SUMMARIZATION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseline_model_version** | **str** | Version of current baseline model. It will be ignored if model is set. Valid versions are: Article Suggestion baseline model: - 0.9 - 1.0 (default) Summarization baseline model: - 1.0 | [optional] 
**model** | **str** | Conversation model resource name. Format: &#x60;projects//conversationModels/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_assistant_config_conversation_model_config import GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_conversation_model_config_instance = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_conversation_model_config_dict = google_cloud_dialogflow_v2beta1_human_agent_assistant_config_conversation_model_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig from a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_conversation_model_config_from_dict = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig.from_dict(google_cloud_dialogflow_v2beta1_human_agent_assistant_config_conversation_model_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


