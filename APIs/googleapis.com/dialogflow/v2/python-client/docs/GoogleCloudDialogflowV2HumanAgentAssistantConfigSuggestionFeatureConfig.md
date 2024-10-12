# GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig

Config for suggestion features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_model_config** | [**GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig**](GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig.md) |  | [optional] 
**conversation_process_config** | [**GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig**](GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig.md) |  | [optional] 
**disable_agent_query_logging** | **bool** | Optional. Disable the logging of search queries sent by human agents. It can prevent those queries from being stored at answer records. Supported features: KNOWLEDGE_SEARCH. | [optional] 
**enable_conversation_augmented_query** | **bool** | Optional. Enable including conversation context during query answer generation. Supported features: KNOWLEDGE_SEARCH. | [optional] 
**enable_event_based_suggestion** | **bool** | Automatically iterates all participants and tries to compile suggestions. Supported features: ARTICLE_SUGGESTION, FAQ, DIALOGFLOW_ASSIST, KNOWLEDGE_ASSIST. | [optional] 
**query_config** | [**GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig**](GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig.md) |  | [optional] 
**suggestion_feature** | [**GoogleCloudDialogflowV2SuggestionFeature**](GoogleCloudDialogflowV2SuggestionFeature.md) |  | [optional] 
**suggestion_trigger_settings** | [**GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings**](GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_feature_config import GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig from a JSON string
google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_feature_config_instance = GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_feature_config_dict = google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_feature_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig from a dict
google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_feature_config_from_dict = GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig.from_dict(google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_feature_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


