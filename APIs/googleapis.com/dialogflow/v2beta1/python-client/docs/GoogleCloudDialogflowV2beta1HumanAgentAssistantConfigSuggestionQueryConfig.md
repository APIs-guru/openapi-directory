# GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig

Config for suggestion query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | Confidence threshold of query result. Agent Assist gives each suggestion a score in the range [0.0, 1.0], based on the relevance between the suggestion and the current conversation context. A score of 0.0 has no relevance, while a score of 1.0 has high relevance. Only suggestions with a score greater than or equal to the value of this field are included in the results. For a baseline model (the default), the recommended value is in the range [0.05, 0.1]. For a custom model, there is no recommended value. Tune this value by starting from a very low value and slowly increasing until you have desired results. If this field is not set, it is default to 0.0, which means that all suggestions are returned. Supported features: ARTICLE_SUGGESTION, FAQ, SMART_REPLY, SMART_COMPOSE, KNOWLEDGE_SEARCH, KNOWLEDGE_ASSIST, ENTITY_EXTRACTION. | [optional] 
**context_filter_settings** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings.md) |  | [optional] 
**dialogflow_query_source** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource.md) |  | [optional] 
**document_query_source** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource.md) |  | [optional] 
**knowledge_base_query_source** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource.md) |  | [optional] 
**max_results** | **int** | Maximum number of results to return. Currently, if unset, defaults to 10. And the max number is 20. | [optional] 
**sections** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config import GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_instance = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_dict = google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig from a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_from_dict = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig.from_dict(google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


