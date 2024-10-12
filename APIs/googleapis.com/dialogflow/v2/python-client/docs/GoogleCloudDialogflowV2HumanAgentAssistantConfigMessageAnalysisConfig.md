# GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig

Configuration for analyses to run on each conversation message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_entity_extraction** | **bool** | Enable entity extraction in conversation messages on [agent assist stage](https://cloud.google.com/dialogflow/priv/docs/contact-center/basics#stages). If unspecified, defaults to false. Currently, this feature is not general available, please contact Google to get access. | [optional] 
**enable_sentiment_analysis** | **bool** | Enable sentiment analysis in conversation messages on [agent assist stage](https://cloud.google.com/dialogflow/priv/docs/contact-center/basics#stages). If unspecified, defaults to false. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user&#39;s attitude as positive, negative, or neutral: https://cloud.google.com/natural-language/docs/basics#sentiment_analysis For Participants.StreamingAnalyzeContent method, result will be in StreamingAnalyzeContentResponse.message.SentimentAnalysisResult. For Participants.AnalyzeContent method, result will be in AnalyzeContentResponse.message.SentimentAnalysisResult For Conversations.ListMessages method, result will be in ListMessagesResponse.messages.SentimentAnalysisResult If Pub/Sub notification is configured, result will be in ConversationEvent.new_message_payload.SentimentAnalysisResult. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_human_agent_assistant_config_message_analysis_config import GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig from a JSON string
google_cloud_dialogflow_v2_human_agent_assistant_config_message_analysis_config_instance = GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_human_agent_assistant_config_message_analysis_config_dict = google_cloud_dialogflow_v2_human_agent_assistant_config_message_analysis_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig from a dict
google_cloud_dialogflow_v2_human_agent_assistant_config_message_analysis_config_from_dict = GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig.from_dict(google_cloud_dialogflow_v2_human_agent_assistant_config_message_analysis_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


