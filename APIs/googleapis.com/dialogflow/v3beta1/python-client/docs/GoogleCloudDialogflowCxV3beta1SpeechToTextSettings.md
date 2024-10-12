# GoogleCloudDialogflowCxV3beta1SpeechToTextSettings

Settings related to speech recognition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_speech_adaptation** | **bool** | Whether to use speech adaptation for speech recognition. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_speech_to_text_settings import GoogleCloudDialogflowCxV3beta1SpeechToTextSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1SpeechToTextSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_speech_to_text_settings_instance = GoogleCloudDialogflowCxV3beta1SpeechToTextSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1SpeechToTextSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_speech_to_text_settings_dict = google_cloud_dialogflow_cx_v3beta1_speech_to_text_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1SpeechToTextSettings from a dict
google_cloud_dialogflow_cx_v3beta1_speech_to_text_settings_from_dict = GoogleCloudDialogflowCxV3beta1SpeechToTextSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_speech_to_text_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


