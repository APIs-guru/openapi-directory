# GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig

Config to process conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recent_sentences_count** | **int** | Number of recent non-small-talk sentences to use as context for article and FAQ suggestion | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_human_agent_assistant_config_conversation_process_config import GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig from a JSON string
google_cloud_dialogflow_v2_human_agent_assistant_config_conversation_process_config_instance = GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_human_agent_assistant_config_conversation_process_config_dict = google_cloud_dialogflow_v2_human_agent_assistant_config_conversation_process_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig from a dict
google_cloud_dialogflow_v2_human_agent_assistant_config_conversation_process_config_from_dict = GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig.from_dict(google_cloud_dialogflow_v2_human_agent_assistant_config_conversation_process_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


