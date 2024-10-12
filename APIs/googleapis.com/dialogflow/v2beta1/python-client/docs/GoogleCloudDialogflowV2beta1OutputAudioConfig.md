# GoogleCloudDialogflowV2beta1OutputAudioConfig

Instructs the speech synthesizer how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_encoding** | **str** | Required. Audio encoding of the synthesized audio content. | [optional] 
**sample_rate_hertz** | **int** | The synthesis sample rate (in hertz) for this audio. If not provided, then the synthesizer will use the default sample rate based on the audio encoding. If this is different from the voice&#39;s natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality). | [optional] 
**synthesize_speech_config** | [**GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig**](GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_output_audio_config import GoogleCloudDialogflowV2beta1OutputAudioConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1OutputAudioConfig from a JSON string
google_cloud_dialogflow_v2beta1_output_audio_config_instance = GoogleCloudDialogflowV2beta1OutputAudioConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1OutputAudioConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_output_audio_config_dict = google_cloud_dialogflow_v2beta1_output_audio_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1OutputAudioConfig from a dict
google_cloud_dialogflow_v2beta1_output_audio_config_from_dict = GoogleCloudDialogflowV2beta1OutputAudioConfig.from_dict(google_cloud_dialogflow_v2beta1_output_audio_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


