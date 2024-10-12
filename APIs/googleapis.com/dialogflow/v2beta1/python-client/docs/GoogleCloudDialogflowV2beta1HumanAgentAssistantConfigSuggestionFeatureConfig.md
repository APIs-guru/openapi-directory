# GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig

Config for suggestion features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_model_config** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig.md) |  | [optional] 
**conversation_process_config** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig.md) |  | [optional] 
**disable_agent_query_logging** | **bool** | Optional. Disable the logging of search queries sent by human agents. It can prevent those queries from being stored at answer records. Supported features: KNOWLEDGE_SEARCH. | [optional] 
**enable_conversation_augmented_query** | **bool** | Optional. Enable including conversation context during query answer generation. Supported features: KNOWLEDGE_SEARCH. | [optional] 
**enable_event_based_suggestion** | **bool** | Automatically iterates all participants and tries to compile suggestions. Supported features: ARTICLE_SUGGESTION, FAQ, DIALOGFLOW_ASSIST, ENTITY_EXTRACTION, KNOWLEDGE_ASSIST. | [optional] 
**query_config** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig.md) |  | [optional] 
**suggestion_feature** | [**GoogleCloudDialogflowV2beta1SuggestionFeature**](GoogleCloudDialogflowV2beta1SuggestionFeature.md) |  | [optional] 
**suggestion_trigger_settings** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_feature_config import GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_feature_config_instance = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_feature_config_dict = google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_feature_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig from a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_feature_config_from_dict = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig.from_dict(google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_feature_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


