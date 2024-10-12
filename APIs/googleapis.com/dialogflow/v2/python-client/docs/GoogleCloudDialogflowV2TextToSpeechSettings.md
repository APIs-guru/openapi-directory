# GoogleCloudDialogflowV2TextToSpeechSettings

Instructs the speech synthesizer on how to generate the output audio content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_text_to_speech** | **bool** | Optional. Indicates whether text to speech is enabled. Even when this field is false, other settings in this proto are still retained. | [optional] 
**output_audio_encoding** | **str** | Required. Audio encoding of the synthesized audio content. | [optional] 
**sample_rate_hertz** | **int** | Optional. The synthesis sample rate (in hertz) for this audio. If not provided, then the synthesizer will use the default sample rate based on the audio encoding. If this is different from the voice&#39;s natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality). | [optional] 
**synthesize_speech_configs** | [**Dict[str, GoogleCloudDialogflowV2SynthesizeSpeechConfig]**](GoogleCloudDialogflowV2SynthesizeSpeechConfig.md) | Optional. Configuration of how speech should be synthesized, mapping from language (https://cloud.google.com/dialogflow/docs/reference/language) to SynthesizeSpeechConfig. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_text_to_speech_settings import GoogleCloudDialogflowV2TextToSpeechSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2TextToSpeechSettings from a JSON string
google_cloud_dialogflow_v2_text_to_speech_settings_instance = GoogleCloudDialogflowV2TextToSpeechSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2TextToSpeechSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_text_to_speech_settings_dict = google_cloud_dialogflow_v2_text_to_speech_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2TextToSpeechSettings from a dict
google_cloud_dialogflow_v2_text_to_speech_settings_from_dict = GoogleCloudDialogflowV2TextToSpeechSettings.from_dict(google_cloud_dialogflow_v2_text_to_speech_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


