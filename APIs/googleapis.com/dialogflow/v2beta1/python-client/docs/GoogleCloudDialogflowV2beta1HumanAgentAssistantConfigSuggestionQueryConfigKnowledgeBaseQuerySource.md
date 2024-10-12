# GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource

Knowledge base source settings. Supported features: ARTICLE_SUGGESTION, FAQ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**knowledge_bases** | **List[str]** | Required. Knowledge bases to query. Format: &#x60;projects//locations//knowledgeBases/&#x60;. Currently, only one knowledge base is supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source import GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source_instance = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source_dict = google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource from a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source_from_dict = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource.from_dict(google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_knowledge_base_query_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


