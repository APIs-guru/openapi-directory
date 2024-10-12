# GoogleCloudDialogflowV2VoiceSelectionParams

Description of which voice to use for speech synthesis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and ssml_gender. | [optional] 
**ssml_gender** | **str** | Optional. The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement. If a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_voice_selection_params import GoogleCloudDialogflowV2VoiceSelectionParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2VoiceSelectionParams from a JSON string
google_cloud_dialogflow_v2_voice_selection_params_instance = GoogleCloudDialogflowV2VoiceSelectionParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2VoiceSelectionParams.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_voice_selection_params_dict = google_cloud_dialogflow_v2_voice_selection_params_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2VoiceSelectionParams from a dict
google_cloud_dialogflow_v2_voice_selection_params_from_dict = GoogleCloudDialogflowV2VoiceSelectionParams.from_dict(google_cloud_dialogflow_v2_voice_selection_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


