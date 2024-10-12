# GoogleCloudDialogflowV2beta1SpeechToTextConfig

Configures speech transcription for ConversationProfile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Which Speech model to select. Select the model best suited to your domain to get best results. If a model is not explicitly specified, then Dialogflow auto-selects a model based on other parameters in the SpeechToTextConfig and Agent settings. If enhanced speech model is enabled for the agent and an enhanced version of the specified model for the language does not exist, then the speech is recognized using the standard version of the specified model. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics#select-model) for more details. If you specify a model, the following models typically have the best performance: - phone_call (best for Agent Assist and telephony) - latest_short (best for Dialogflow non-telephony) - command_and_search Leave this field unspecified to use [Agent Speech settings](https://cloud.google.com/dialogflow/cx/docs/concept/agent#settings-speech) for model selection. | [optional] 
**speech_model_variant** | **str** | The speech model used in speech to text. &#x60;SPEECH_MODEL_VARIANT_UNSPECIFIED&#x60;, &#x60;USE_BEST_AVAILABLE&#x60; will be treated as &#x60;USE_ENHANCED&#x60;. It can be overridden in AnalyzeContentRequest and StreamingAnalyzeContentRequest request. If enhanced model variant is specified and an enhanced version of the specified model for the language does not exist, then it would emit an error. | [optional] 
**use_timeout_based_endpointing** | **bool** | Use timeout based endpointing, interpreting endpointer sensitivy as seconds of timeout value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_speech_to_text_config import GoogleCloudDialogflowV2beta1SpeechToTextConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SpeechToTextConfig from a JSON string
google_cloud_dialogflow_v2beta1_speech_to_text_config_instance = GoogleCloudDialogflowV2beta1SpeechToTextConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SpeechToTextConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_speech_to_text_config_dict = google_cloud_dialogflow_v2beta1_speech_to_text_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SpeechToTextConfig from a dict
google_cloud_dialogflow_v2beta1_speech_to_text_config_from_dict = GoogleCloudDialogflowV2beta1SpeechToTextConfig.from_dict(google_cloud_dialogflow_v2beta1_speech_to_text_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


