# GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource

Dialogflow source setting. Supported feature: DIALOGFLOW_ASSIST, ENTITY_EXTRACTION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent** | **str** | Required. The name of a dialogflow virtual agent used for end user side intent detection and suggestion. Format: &#x60;projects//locations//agent&#x60;. When multiple agents are allowed in the same Dialogflow project. | [optional] 
**human_agent_side_config** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySourceHumanAgentSideConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_dialogflow_query_source import GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_dialogflow_query_source_instance = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_dialogflow_query_source_dict = google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_dialogflow_query_source_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource from a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_dialogflow_query_source_from_dict = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource.from_dict(google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_dialogflow_query_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


