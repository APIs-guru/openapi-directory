# GoogleCloudDialogflowV2QueryResult

Represents the result of conversational query or event processing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action name from the matched intent. | [optional] 
**all_required_params_present** | **bool** | This field is set to: - &#x60;false&#x60; if the matched intent has required parameters and not all of the required parameter values have been collected. - &#x60;true&#x60; if all required parameter values have been collected, or if the matched intent doesn&#39;t contain any required parameters. | [optional] 
**cancels_slot_filling** | **bool** | Indicates whether the conversational query triggers a cancellation for slot filling. For more information, see the [cancel slot filling documentation](https://cloud.google.com/dialogflow/es/docs/intents-actions-parameters#cancel). | [optional] 
**diagnostic_info** | **Dict[str, object]** | Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain: - webhook call latency - webhook errors | [optional] 
**fulfillment_messages** | [**List[GoogleCloudDialogflowV2IntentMessage]**](GoogleCloudDialogflowV2IntentMessage.md) | The collection of rich messages to present to the user. | [optional] 
**fulfillment_text** | **str** | The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, &#x60;fulfillment_messages&#x60; should be preferred. | [optional] 
**intent** | [**GoogleCloudDialogflowV2Intent**](GoogleCloudDialogflowV2Intent.md) |  | [optional] 
**intent_detection_confidence** | **float** | The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are &#x60;multiple knowledge_answers&#x60; messages, this value is set to the greatest &#x60;knowledgeAnswers.match_confidence&#x60; value in the list. | [optional] 
**language_code** | **str** | The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. | [optional] 
**output_contexts** | [**List[GoogleCloudDialogflowV2Context]**](GoogleCloudDialogflowV2Context.md) | The collection of output contexts. If applicable, &#x60;output_contexts.parameters&#x60; contains entries with name &#x60;.original&#x60; containing the original parameter values before the query. | [optional] 
**parameters** | **Dict[str, object]** | The collection of extracted parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter&#39;s entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter&#39;s entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. | [optional] 
**query_text** | **str** | The original conversational query text: - If natural language text was provided as input, &#x60;query_text&#x60; contains a copy of the input. - If natural language speech audio was provided as input, &#x60;query_text&#x60; contains the speech recognition result. If speech recognizer produced multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, &#x60;query_text&#x60; will contain the corrected user input. | [optional] 
**sentiment_analysis_result** | [**GoogleCloudDialogflowV2SentimentAnalysisResult**](GoogleCloudDialogflowV2SentimentAnalysisResult.md) |  | [optional] 
**speech_recognition_confidence** | **float** | The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is not guaranteed to be accurate or set. In particular this field isn&#39;t set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult. | [optional] 
**webhook_payload** | **Dict[str, object]** | If the query was fulfilled by a webhook call, this field is set to the value of the &#x60;payload&#x60; field returned in the webhook response. | [optional] 
**webhook_source** | **str** | If the query was fulfilled by a webhook call, this field is set to the value of the &#x60;source&#x60; field returned in the webhook response. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_query_result import GoogleCloudDialogflowV2QueryResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2QueryResult from a JSON string
google_cloud_dialogflow_v2_query_result_instance = GoogleCloudDialogflowV2QueryResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2QueryResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_query_result_dict = google_cloud_dialogflow_v2_query_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2QueryResult from a dict
google_cloud_dialogflow_v2_query_result_from_dict = GoogleCloudDialogflowV2QueryResult.from_dict(google_cloud_dialogflow_v2_query_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


