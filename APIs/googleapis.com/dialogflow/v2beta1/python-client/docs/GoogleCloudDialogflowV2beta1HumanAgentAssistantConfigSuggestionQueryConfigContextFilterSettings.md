# GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings

Settings that determine how to filter recent conversation context when generating suggestions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drop_handoff_messages** | **bool** | If set to true, the last message from virtual agent (hand off message) and the message before it (trigger message of hand off) are dropped. | [optional] 
**drop_ivr_messages** | **bool** | If set to true, all messages from ivr stage are dropped. | [optional] 
**drop_virtual_agent_messages** | **bool** | If set to true, all messages from virtual agent are dropped. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_context_filter_settings import GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_context_filter_settings_instance = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_context_filter_settings_dict = google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_context_filter_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings from a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_context_filter_settings_from_dict = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings.from_dict(google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_context_filter_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


