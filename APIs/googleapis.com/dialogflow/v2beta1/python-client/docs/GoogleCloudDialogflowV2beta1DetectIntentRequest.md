# GoogleCloudDialogflowV2beta1DetectIntentRequest

The request to detect user's intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_audio** | **bytearray** | The natural language speech audio to be processed. This field should be populated iff &#x60;query_input&#x60; is set to an input audio config. A single request can contain up to 1 minute of speech audio data. | [optional] 
**output_audio_config** | [**GoogleCloudDialogflowV2beta1OutputAudioConfig**](GoogleCloudDialogflowV2beta1OutputAudioConfig.md) |  | [optional] 
**output_audio_config_mask** | **str** | Mask for output_audio_config indicating which settings in this request-level config should override speech synthesizer settings defined at agent-level. If unspecified or empty, output_audio_config replaces the agent-level config in its entirety. | [optional] 
**query_input** | [**GoogleCloudDialogflowV2beta1QueryInput**](GoogleCloudDialogflowV2beta1QueryInput.md) |  | [optional] 
**var_query_params** | [**GoogleCloudDialogflowV2beta1QueryParameters**](GoogleCloudDialogflowV2beta1QueryParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_detect_intent_request import GoogleCloudDialogflowV2beta1DetectIntentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1DetectIntentRequest from a JSON string
google_cloud_dialogflow_v2beta1_detect_intent_request_instance = GoogleCloudDialogflowV2beta1DetectIntentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1DetectIntentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_detect_intent_request_dict = google_cloud_dialogflow_v2beta1_detect_intent_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1DetectIntentRequest from a dict
google_cloud_dialogflow_v2beta1_detect_intent_request_from_dict = GoogleCloudDialogflowV2beta1DetectIntentRequest.from_dict(google_cloud_dialogflow_v2beta1_detect_intent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


