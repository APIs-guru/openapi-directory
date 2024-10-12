# GoogleCloudDialogflowCxV3SynthesizeSpeechConfig

Configuration of how speech should be synthesized.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effects_profile_id** | **List[str]** | Optional. An identifier which selects &#39;audio effects&#39; profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given. | [optional] 
**pitch** | **float** | Optional. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch. | [optional] 
**speaking_rate** | **float** | Optional. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values &lt; 0.25 or &gt; 4.0 will return an error. | [optional] 
**voice** | [**GoogleCloudDialogflowCxV3VoiceSelectionParams**](GoogleCloudDialogflowCxV3VoiceSelectionParams.md) |  | [optional] 
**volume_gain_db** | **float** | Optional. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there&#39;s usually no effective increase in loudness for any value greater than that. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_synthesize_speech_config import GoogleCloudDialogflowCxV3SynthesizeSpeechConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3SynthesizeSpeechConfig from a JSON string
google_cloud_dialogflow_cx_v3_synthesize_speech_config_instance = GoogleCloudDialogflowCxV3SynthesizeSpeechConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3SynthesizeSpeechConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_synthesize_speech_config_dict = google_cloud_dialogflow_cx_v3_synthesize_speech_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3SynthesizeSpeechConfig from a dict
google_cloud_dialogflow_cx_v3_synthesize_speech_config_from_dict = GoogleCloudDialogflowCxV3SynthesizeSpeechConfig.from_dict(google_cloud_dialogflow_cx_v3_synthesize_speech_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


