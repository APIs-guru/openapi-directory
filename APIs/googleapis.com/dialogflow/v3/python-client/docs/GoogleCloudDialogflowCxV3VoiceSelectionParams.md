# GoogleCloudDialogflowCxV3VoiceSelectionParams

Description of which voice to use for speech synthesis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and ssml_gender. For the list of available voices, please refer to [Supported voices and languages](https://cloud.google.com/text-to-speech/docs/voices). | [optional] 
**ssml_gender** | **str** | Optional. The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement. If a voice of the appropriate gender is not available, the synthesizer substitutes a voice with a different gender rather than failing the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_voice_selection_params import GoogleCloudDialogflowCxV3VoiceSelectionParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3VoiceSelectionParams from a JSON string
google_cloud_dialogflow_cx_v3_voice_selection_params_instance = GoogleCloudDialogflowCxV3VoiceSelectionParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3VoiceSelectionParams.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_voice_selection_params_dict = google_cloud_dialogflow_cx_v3_voice_selection_params_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3VoiceSelectionParams from a dict
google_cloud_dialogflow_cx_v3_voice_selection_params_from_dict = GoogleCloudDialogflowCxV3VoiceSelectionParams.from_dict(google_cloud_dialogflow_cx_v3_voice_selection_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


