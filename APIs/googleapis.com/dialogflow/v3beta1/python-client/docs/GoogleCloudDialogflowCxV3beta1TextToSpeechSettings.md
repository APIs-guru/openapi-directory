# GoogleCloudDialogflowCxV3beta1TextToSpeechSettings

Settings related to speech synthesizing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**synthesize_speech_configs** | [**Dict[str, GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig]**](GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig.md) | Configuration of how speech should be synthesized, mapping from language (https://cloud.google.com/dialogflow/cx/docs/reference/language) to SynthesizeSpeechConfig. These settings affect: - The [phone gateway](https://cloud.google.com/dialogflow/cx/docs/concept/integration/phone-gateway) synthesize configuration set via Agent.text_to_speech_settings. - How speech is synthesized when invoking session APIs. Agent.text_to_speech_settings only applies if OutputAudioConfig.synthesize_speech_config is not specified. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_text_to_speech_settings import GoogleCloudDialogflowCxV3beta1TextToSpeechSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1TextToSpeechSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_text_to_speech_settings_instance = GoogleCloudDialogflowCxV3beta1TextToSpeechSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1TextToSpeechSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_text_to_speech_settings_dict = google_cloud_dialogflow_cx_v3beta1_text_to_speech_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1TextToSpeechSettings from a dict
google_cloud_dialogflow_cx_v3beta1_text_to_speech_settings_from_dict = GoogleCloudDialogflowCxV3beta1TextToSpeechSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_text_to_speech_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


