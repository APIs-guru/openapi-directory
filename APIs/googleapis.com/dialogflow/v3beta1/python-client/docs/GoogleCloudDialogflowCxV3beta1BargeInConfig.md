# GoogleCloudDialogflowCxV3beta1BargeInConfig

Configuration of the barge-in behavior. Barge-in instructs the API to return a detected utterance at a proper time while the client is playing back the response audio from a previous request. When the client sees the utterance, it should stop the playback and immediately get ready for receiving the responses for the current request. The barge-in handling requires the client to start streaming audio input as soon as it starts playing back the audio from the previous response. The playback is modeled into two phases: * No barge-in phase: which goes first and during which speech detection should not be carried out. * Barge-in phase: which follows the no barge-in phase and during which the API starts speech detection and may inform the client that an utterance has been detected. Note that no-speech event is not expected in this phase. The client provides this configuration in terms of the durations of those two phases. The durations are measured in terms of the audio length from the the start of the input audio. No-speech event is a response with END_OF_UTTERANCE without any transcript following up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**no_barge_in_duration** | **str** | Duration that is not eligible for barge-in at the beginning of the input audio. | [optional] 
**total_duration** | **str** | Total duration for the playback at the beginning of the input audio. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_barge_in_config import GoogleCloudDialogflowCxV3beta1BargeInConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1BargeInConfig from a JSON string
google_cloud_dialogflow_cx_v3beta1_barge_in_config_instance = GoogleCloudDialogflowCxV3beta1BargeInConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1BargeInConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_barge_in_config_dict = google_cloud_dialogflow_cx_v3beta1_barge_in_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1BargeInConfig from a dict
google_cloud_dialogflow_cx_v3beta1_barge_in_config_from_dict = GoogleCloudDialogflowCxV3beta1BargeInConfig.from_dict(google_cloud_dialogflow_cx_v3beta1_barge_in_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


