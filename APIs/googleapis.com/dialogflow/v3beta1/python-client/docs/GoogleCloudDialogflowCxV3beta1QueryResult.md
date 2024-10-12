# GoogleCloudDialogflowCxV3beta1QueryResult

Represents the result of a conversational query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_settings** | [**GoogleCloudDialogflowCxV3beta1AdvancedSettings**](GoogleCloudDialogflowCxV3beta1AdvancedSettings.md) |  | [optional] 
**allow_answer_feedback** | **bool** | Indicates whether the Thumbs up/Thumbs down rating controls are need to be shown for the response in the Dialogflow Messenger widget. | [optional] 
**current_page** | [**GoogleCloudDialogflowCxV3beta1Page**](GoogleCloudDialogflowCxV3beta1Page.md) |  | [optional] 
**diagnostic_info** | **Dict[str, object]** | The free-form diagnostic info. For example, this field could contain webhook call latency. The fields of this data can change without notice, so you should not write code that depends on its structure. One of the fields is called \&quot;Alternative Matched Intents\&quot;, which may aid with debugging. The following describes these intent results: - The list is empty if no intent was matched to end-user input. - Only intents that are referenced in the currently active flow are included. - The matched intent is included. - Other intents that could have matched end-user input, but did not match because they are referenced by intent routes that are out of [scope](https://cloud.google.com/dialogflow/cx/docs/concept/handler#scope), are included. - Other intents referenced by intent routes in scope that matched end-user input, but had a lower confidence score. | [optional] 
**dtmf** | [**GoogleCloudDialogflowCxV3beta1DtmfInput**](GoogleCloudDialogflowCxV3beta1DtmfInput.md) |  | [optional] 
**intent** | [**GoogleCloudDialogflowCxV3beta1Intent**](GoogleCloudDialogflowCxV3beta1Intent.md) |  | [optional] 
**intent_detection_confidence** | **float** | The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. This field is deprecated, please use QueryResult.match instead. | [optional] 
**language_code** | **str** | The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. | [optional] 
**match** | [**GoogleCloudDialogflowCxV3beta1Match**](GoogleCloudDialogflowCxV3beta1Match.md) |  | [optional] 
**parameters** | **Dict[str, object]** | The collected session parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter&#39;s entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter&#39;s entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. | [optional] 
**response_messages** | [**List[GoogleCloudDialogflowCxV3beta1ResponseMessage]**](GoogleCloudDialogflowCxV3beta1ResponseMessage.md) | The list of rich messages returned to the client. Responses vary from simple text messages to more sophisticated, structured payloads used to drive complex logic. | [optional] 
**sentiment_analysis_result** | [**GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult**](GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult.md) |  | [optional] 
**text** | **str** | If natural language text was provided as input, this field will contain a copy of the text. | [optional] 
**transcript** | **str** | If natural language speech audio was provided as input, this field will contain the transcript for the audio. | [optional] 
**trigger_event** | **str** | If an event was provided as input, this field will contain the name of the event. | [optional] 
**trigger_intent** | **str** | If an intent was provided as input, this field will contain a copy of the intent identifier. Format: &#x60;projects//locations//agents//intents/&#x60;. | [optional] 
**webhook_display_names** | **List[str]** | The list of webhook display names in the order of call sequence. | [optional] 
**webhook_ids** | **List[str]** | The list of webhook ids in the order of call sequence. | [optional] 
**webhook_latencies** | **List[str]** | The list of webhook latencies in the order of call sequence. | [optional] 
**webhook_payloads** | **List[Dict[str, object]]** | The list of webhook payload in WebhookResponse.payload, in the order of call sequence. If some webhook call fails or doesn&#39;t return any payload, an empty &#x60;Struct&#x60; would be used instead. | [optional] 
**webhook_statuses** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | The list of webhook call status in the order of call sequence. | [optional] 
**webhook_tags** | **List[str]** | The list of webhook tags in the order of call sequence. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_query_result import GoogleCloudDialogflowCxV3beta1QueryResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1QueryResult from a JSON string
google_cloud_dialogflow_cx_v3beta1_query_result_instance = GoogleCloudDialogflowCxV3beta1QueryResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1QueryResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_query_result_dict = google_cloud_dialogflow_cx_v3beta1_query_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1QueryResult from a dict
google_cloud_dialogflow_cx_v3beta1_query_result_from_dict = GoogleCloudDialogflowCxV3beta1QueryResult.from_dict(google_cloud_dialogflow_cx_v3beta1_query_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


