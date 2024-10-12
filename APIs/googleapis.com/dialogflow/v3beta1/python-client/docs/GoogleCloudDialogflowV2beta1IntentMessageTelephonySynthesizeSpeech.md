# GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech

Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ssml** | **str** | The SSML to be synthesized. For more information, see [SSML](https://developers.google.com/actions/reference/ssml). | [optional] 
**text** | **str** | The raw text to be synthesized. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_intent_message_telephony_synthesize_speech import GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech from a JSON string
google_cloud_dialogflow_v2beta1_intent_message_telephony_synthesize_speech_instance = GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_intent_message_telephony_synthesize_speech_dict = google_cloud_dialogflow_v2beta1_intent_message_telephony_synthesize_speech_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech from a dict
google_cloud_dialogflow_v2beta1_intent_message_telephony_synthesize_speech_from_dict = GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech.from_dict(google_cloud_dialogflow_v2beta1_intent_message_telephony_synthesize_speech_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


