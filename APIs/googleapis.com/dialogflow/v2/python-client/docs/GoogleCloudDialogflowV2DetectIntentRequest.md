# GoogleCloudDialogflowV2DetectIntentRequest

The request to detect user's intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_audio** | **bytearray** | The natural language speech audio to be processed. This field should be populated iff &#x60;query_input&#x60; is set to an input audio config. A single request can contain up to 1 minute of speech audio data. | [optional] 
**output_audio_config** | [**GoogleCloudDialogflowV2OutputAudioConfig**](GoogleCloudDialogflowV2OutputAudioConfig.md) |  | [optional] 
**output_audio_config_mask** | **str** | Mask for output_audio_config indicating which settings in this request-level config should override speech synthesizer settings defined at agent-level. If unspecified or empty, output_audio_config replaces the agent-level config in its entirety. | [optional] 
**query_input** | [**GoogleCloudDialogflowV2QueryInput**](GoogleCloudDialogflowV2QueryInput.md) |  | [optional] 
**var_query_params** | [**GoogleCloudDialogflowV2QueryParameters**](GoogleCloudDialogflowV2QueryParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_detect_intent_request import GoogleCloudDialogflowV2DetectIntentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2DetectIntentRequest from a JSON string
google_cloud_dialogflow_v2_detect_intent_request_instance = GoogleCloudDialogflowV2DetectIntentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2DetectIntentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_detect_intent_request_dict = google_cloud_dialogflow_v2_detect_intent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2DetectIntentRequest from a dict
google_cloud_dialogflow_v2_detect_intent_request_from_dict = GoogleCloudDialogflowV2DetectIntentRequest.from_dict(google_cloud_dialogflow_v2_detect_intent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


