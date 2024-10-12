# GoogleCloudDialogflowV2beta1AnalyzeContentRequest

The request message for Participants.AnalyzeContent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assist_query_params** | [**GoogleCloudDialogflowV2beta1AssistQueryParameters**](GoogleCloudDialogflowV2beta1AssistQueryParameters.md) |  | [optional] 
**audio_input** | [**GoogleCloudDialogflowV2beta1AudioInput**](GoogleCloudDialogflowV2beta1AudioInput.md) |  | [optional] 
**cx_current_page** | **str** | The unique identifier of the CX page to override the &#x60;current_page&#x60; in the session. Format: &#x60;projects//locations//agents//flows//pages/&#x60;. If &#x60;cx_current_page&#x60; is specified, the previous state of the session will be ignored by Dialogflow CX, including the previous page and the previous session parameters. In most cases, &#x60;cx_current_page&#x60; and &#x60;cx_parameters&#x60; should be configured together to direct a session to a specific state. Note: this field should only be used if you are connecting to a Dialogflow CX agent. | [optional] 
**cx_parameters** | **Dict[str, object]** | Additional parameters to be put into Dialogflow CX session parameters. To remove a parameter from the session, clients should explicitly set the parameter value to null. Note: this field should only be used if you are connecting to a Dialogflow CX agent. | [optional] 
**event_input** | [**GoogleCloudDialogflowV2beta1EventInput**](GoogleCloudDialogflowV2beta1EventInput.md) |  | [optional] 
**intent_input** | [**GoogleCloudDialogflowV2beta1IntentInput**](GoogleCloudDialogflowV2beta1IntentInput.md) |  | [optional] 
**message_send_time** | **str** | Optional. The send time of the message from end user or human agent&#39;s perspective. It is used for identifying the same message under one participant. Given two messages under the same participant: * If send time are different regardless of whether the content of the messages are exactly the same, the conversation will regard them as two distinct messages sent by the participant. * If send time is the same regardless of whether the content of the messages are exactly the same, the conversation will regard them as same message, and ignore the message received later. If the value is not provided, a new request will always be regarded as a new message without any de-duplication. | [optional] 
**var_query_params** | [**GoogleCloudDialogflowV2beta1QueryParameters**](GoogleCloudDialogflowV2beta1QueryParameters.md) |  | [optional] 
**reply_audio_config** | [**GoogleCloudDialogflowV2beta1OutputAudioConfig**](GoogleCloudDialogflowV2beta1OutputAudioConfig.md) |  | [optional] 
**request_id** | **str** | A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a &#x60;request_id&#x60; is provided. | [optional] 
**suggestion_input** | [**GoogleCloudDialogflowV2beta1SuggestionInput**](GoogleCloudDialogflowV2beta1SuggestionInput.md) |  | [optional] 
**text_input** | [**GoogleCloudDialogflowV2beta1TextInput**](GoogleCloudDialogflowV2beta1TextInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_analyze_content_request import GoogleCloudDialogflowV2beta1AnalyzeContentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1AnalyzeContentRequest from a JSON string
google_cloud_dialogflow_v2beta1_analyze_content_request_instance = GoogleCloudDialogflowV2beta1AnalyzeContentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1AnalyzeContentRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_analyze_content_request_dict = google_cloud_dialogflow_v2beta1_analyze_content_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1AnalyzeContentRequest from a dict
google_cloud_dialogflow_v2beta1_analyze_content_request_from_dict = GoogleCloudDialogflowV2beta1AnalyzeContentRequest.from_dict(google_cloud_dialogflow_v2beta1_analyze_content_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


