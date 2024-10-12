# GoogleCloudDialogflowV2AnalyzeContentResponse

The response message for Participants.AnalyzeContent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automated_agent_reply** | [**GoogleCloudDialogflowV2AutomatedAgentReply**](GoogleCloudDialogflowV2AutomatedAgentReply.md) |  | [optional] 
**dtmf_parameters** | [**GoogleCloudDialogflowV2DtmfParameters**](GoogleCloudDialogflowV2DtmfParameters.md) |  | [optional] 
**end_user_suggestion_results** | [**List[GoogleCloudDialogflowV2SuggestionResult]**](GoogleCloudDialogflowV2SuggestionResult.md) | The suggestions for end user. The order is the same as HumanAgentAssistantConfig.SuggestionConfig.feature_configs of HumanAgentAssistantConfig.end_user_suggestion_config. Same as human_agent_suggestion_results, any failure of Agent Assist features will not lead to the overall failure of an AnalyzeContent API call. Instead, the features will fail silently with the error field set in the corresponding SuggestionResult. | [optional] 
**human_agent_suggestion_results** | [**List[GoogleCloudDialogflowV2SuggestionResult]**](GoogleCloudDialogflowV2SuggestionResult.md) | The suggestions for most recent human agent. The order is the same as HumanAgentAssistantConfig.SuggestionConfig.feature_configs of HumanAgentAssistantConfig.human_agent_suggestion_config. Note that any failure of Agent Assist features will not lead to the overall failure of an AnalyzeContent API call. Instead, the features will fail silently with the error field set in the corresponding SuggestionResult. | [optional] 
**message** | [**GoogleCloudDialogflowV2Message**](GoogleCloudDialogflowV2Message.md) |  | [optional] 
**reply_audio** | [**GoogleCloudDialogflowV2OutputAudio**](GoogleCloudDialogflowV2OutputAudio.md) |  | [optional] 
**reply_text** | **str** | The output text content. This field is set if the automated agent responded with text to show to the user. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_analyze_content_response import GoogleCloudDialogflowV2AnalyzeContentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2AnalyzeContentResponse from a JSON string
google_cloud_dialogflow_v2_analyze_content_response_instance = GoogleCloudDialogflowV2AnalyzeContentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2AnalyzeContentResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_analyze_content_response_dict = google_cloud_dialogflow_v2_analyze_content_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2AnalyzeContentResponse from a dict
google_cloud_dialogflow_v2_analyze_content_response_from_dict = GoogleCloudDialogflowV2AnalyzeContentResponse.from_dict(google_cloud_dialogflow_v2_analyze_content_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


