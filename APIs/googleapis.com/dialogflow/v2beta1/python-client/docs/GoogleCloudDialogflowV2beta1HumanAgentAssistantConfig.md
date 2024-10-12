# GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig

Defines the Human Agent Assistant to connect to a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_user_suggestion_config** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig.md) |  | [optional] 
**human_agent_suggestion_config** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig.md) |  | [optional] 
**message_analysis_config** | [**GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig.md) |  | [optional] 
**notification_config** | [**GoogleCloudDialogflowV2beta1NotificationConfig**](GoogleCloudDialogflowV2beta1NotificationConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_assistant_config import GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_instance = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_dict = google_cloud_dialogflow_v2beta1_human_agent_assistant_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig from a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_from_dict = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig.from_dict(google_cloud_dialogflow_v2beta1_human_agent_assistant_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


