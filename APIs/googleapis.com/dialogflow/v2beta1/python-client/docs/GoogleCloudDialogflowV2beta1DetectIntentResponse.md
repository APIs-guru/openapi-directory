# GoogleCloudDialogflowV2beta1DetectIntentResponse

The message returned from the DetectIntent method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternative_query_results** | [**List[GoogleCloudDialogflowV2beta1QueryResult]**](GoogleCloudDialogflowV2beta1QueryResult.md) | If Knowledge Connectors are enabled, there could be more than one result returned for a given query or event, and this field will contain all results except for the top one, which is captured in query_result. The alternative results are ordered by decreasing &#x60;QueryResult.intent_detection_confidence&#x60;. If Knowledge Connectors are disabled, this field will be empty until multiple responses for regular intents are supported, at which point those additional results will be surfaced here. | [optional] 
**output_audio** | **bytearray** | The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the &#x60;query_result.fulfillment_messages&#x60; field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content. | [optional] 
**output_audio_config** | [**GoogleCloudDialogflowV2beta1OutputAudioConfig**](GoogleCloudDialogflowV2beta1OutputAudioConfig.md) |  | [optional] 
**query_result** | [**GoogleCloudDialogflowV2beta1QueryResult**](GoogleCloudDialogflowV2beta1QueryResult.md) |  | [optional] 
**response_id** | **str** | The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues. | [optional] 
**webhook_status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_detect_intent_response import GoogleCloudDialogflowV2beta1DetectIntentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1DetectIntentResponse from a JSON string
google_cloud_dialogflow_v2beta1_detect_intent_response_instance = GoogleCloudDialogflowV2beta1DetectIntentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1DetectIntentResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_detect_intent_response_dict = google_cloud_dialogflow_v2beta1_detect_intent_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1DetectIntentResponse from a dict
google_cloud_dialogflow_v2beta1_detect_intent_response_from_dict = GoogleCloudDialogflowV2beta1DetectIntentResponse.from_dict(google_cloud_dialogflow_v2beta1_detect_intent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


