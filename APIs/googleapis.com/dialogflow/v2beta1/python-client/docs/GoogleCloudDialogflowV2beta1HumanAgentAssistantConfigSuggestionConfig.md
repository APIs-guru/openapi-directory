# GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig

Detail human agent assistant config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_configs** | [**List[GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig]**](GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig.md) | Configuration of different suggestion features. One feature can have only one config. | [optional] 
**group_suggestion_responses** | **bool** | If &#x60;group_suggestion_responses&#x60; is false, and there are multiple &#x60;feature_configs&#x60; in &#x60;event based suggestion&#x60; or StreamingAnalyzeContent, we will try to deliver suggestions to customers as soon as we get new suggestion. Different type of suggestions based on the same context will be in separate Pub/Sub event or &#x60;StreamingAnalyzeContentResponse&#x60;. If &#x60;group_suggestion_responses&#x60; set to true. All the suggestions to the same participant based on the same context will be grouped into a single Pub/Sub event or StreamingAnalyzeContentResponse. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_config import GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_config_instance = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_config_dict = google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig from a dict
google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_config_from_dict = GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig.from_dict(google_cloud_dialogflow_v2beta1_human_agent_assistant_config_suggestion_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


