# GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections

Custom sections to return when requesting a summary of a conversation. This is only supported when `baseline_model_version` == '2.0'. Supported features: CONVERSATION_SUMMARIZATION, CONVERSATION_SUMMARIZATION_VOICE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**section_types** | **List[str]** | The selected sections chosen to return when requesting a summary of a conversation. A duplicate selected section will be treated as a single selected section. If section types are not provided, the default will be {SITUATION, ACTION, RESULT}. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_sections import GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_sections_instance = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_sections_dict = google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_sections_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections from a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_sections_from_dict = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigSections.from_dict(google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_query_config_sections_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


