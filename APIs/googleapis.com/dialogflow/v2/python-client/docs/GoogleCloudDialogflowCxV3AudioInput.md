# GoogleCloudDialogflowCxV3AudioInput

Represents the natural speech audio to be processed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | **bytearray** | The natural language speech audio to be processed. A single request can contain up to 2 minutes of speech audio data. The transcribed text cannot contain more than 256 bytes. For non-streaming audio detect intent, both &#x60;config&#x60; and &#x60;audio&#x60; must be provided. For streaming audio detect intent, &#x60;config&#x60; must be provided in the first request and &#x60;audio&#x60; must be provided in all following requests. | [optional] 
**config** | [**GoogleCloudDialogflowCxV3InputAudioConfig**](GoogleCloudDialogflowCxV3InputAudioConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_audio_input import GoogleCloudDialogflowCxV3AudioInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3AudioInput from a JSON string
google_cloud_dialogflow_cx_v3_audio_input_instance = GoogleCloudDialogflowCxV3AudioInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3AudioInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_audio_input_dict = google_cloud_dialogflow_cx_v3_audio_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3AudioInput from a dict
google_cloud_dialogflow_cx_v3_audio_input_from_dict = GoogleCloudDialogflowCxV3AudioInput.from_dict(google_cloud_dialogflow_cx_v3_audio_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


