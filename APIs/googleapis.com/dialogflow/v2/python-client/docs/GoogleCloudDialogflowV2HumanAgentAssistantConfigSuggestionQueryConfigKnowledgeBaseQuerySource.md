# GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource

Knowledge base source settings. Supported features: ARTICLE_SUGGESTION, FAQ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**knowledge_bases** | **List[str]** | Required. Knowledge bases to query. Format: &#x60;projects//locations//knowledgeBases/&#x60;. Currently, at most 5 knowledge bases are supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source import GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource from a JSON string
google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source_instance = GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source_dict = google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource from a dict
google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source_from_dict = GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource.from_dict(google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


