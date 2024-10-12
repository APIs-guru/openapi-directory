# GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings

Settings of suggestion trigger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**no_small_talk** | **bool** | Do not trigger if last utterance is small talk. | [optional] 
**only_end_user** | **bool** | Only trigger suggestion if participant role of last utterance is END_USER. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_trigger_settings import GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_trigger_settings_instance = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_trigger_settings_dict = google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_trigger_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings from a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_trigger_settings_from_dict = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings.from_dict(google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_trigger_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


