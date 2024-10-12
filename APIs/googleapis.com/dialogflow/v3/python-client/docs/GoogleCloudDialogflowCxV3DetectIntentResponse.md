# GoogleCloudDialogflowCxV3DetectIntentResponse

The message returned from the DetectIntent method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_cancellation** | **bool** | Indicates whether the partial response can be cancelled when a later response arrives. e.g. if the agent specified some music as partial response, it can be cancelled. | [optional] 
**output_audio** | **bytearray** | The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the &#x60;query_result.response_messages&#x60; field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content. | [optional] 
**output_audio_config** | [**GoogleCloudDialogflowCxV3OutputAudioConfig**](GoogleCloudDialogflowCxV3OutputAudioConfig.md) |  | [optional] 
**query_result** | [**GoogleCloudDialogflowCxV3QueryResult**](GoogleCloudDialogflowCxV3QueryResult.md) |  | [optional] 
**response_id** | **str** | Output only. The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues. | [optional] 
**response_type** | **str** | Response type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_detect_intent_response import GoogleCloudDialogflowCxV3DetectIntentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3DetectIntentResponse from a JSON string
google_cloud_dialogflow_cx_v3_detect_intent_response_instance = GoogleCloudDialogflowCxV3DetectIntentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3DetectIntentResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_detect_intent_response_dict = google_cloud_dialogflow_cx_v3_detect_intent_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3DetectIntentResponse from a dict
google_cloud_dialogflow_cx_v3_detect_intent_response_from_dict = GoogleCloudDialogflowCxV3DetectIntentResponse.from_dict(google_cloud_dialogflow_cx_v3_detect_intent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


