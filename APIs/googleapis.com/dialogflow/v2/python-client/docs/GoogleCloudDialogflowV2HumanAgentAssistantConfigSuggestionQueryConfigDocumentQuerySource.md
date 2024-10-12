# GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource

Document source settings. Supported features: SMART_REPLY, SMART_COMPOSE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | **List[str]** | Required. Knowledge documents to query from. Format: &#x60;projects//locations//knowledgeBases//documents/&#x60;. Currently, at most 5 documents are supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_document_query_source import GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource from a JSON string
google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_document_query_source_instance = GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_document_query_source_dict = google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_document_query_source_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource from a dict
google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_document_query_source_from_dict = GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource.from_dict(google_cloud_dialogflow_v2_human_agent_assistant_config_suggestion_query_config_document_query_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


