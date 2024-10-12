# GoogleCloudDialogflowCxV3WebhookRequest

The request message for a webhook call. The request is sent as a JSON object and the field names will be presented in camel cases. You may see undocumented fields in an actual request. These fields are used internally by Dialogflow and should be ignored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detect_intent_response_id** | **str** | Always present. The unique identifier of the DetectIntentResponse that will be returned to the API caller. | [optional] 
**dtmf_digits** | **str** | If DTMF was provided as input, this field will contain the DTMF digits. | [optional] 
**fulfillment_info** | [**GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo**](GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo.md) |  | [optional] 
**intent_info** | [**GoogleCloudDialogflowCxV3WebhookRequestIntentInfo**](GoogleCloudDialogflowCxV3WebhookRequestIntentInfo.md) |  | [optional] 
**language_code** | **str** | The language code specified in the original request. | [optional] 
**messages** | [**List[GoogleCloudDialogflowCxV3ResponseMessage]**](GoogleCloudDialogflowCxV3ResponseMessage.md) | The list of rich message responses to present to the user. Webhook can choose to append or replace this list in WebhookResponse.fulfillment_response; | [optional] 
**page_info** | [**GoogleCloudDialogflowCxV3PageInfo**](GoogleCloudDialogflowCxV3PageInfo.md) |  | [optional] 
**payload** | **Dict[str, object]** | Custom data set in QueryParameters.payload. | [optional] 
**sentiment_analysis_result** | [**GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult**](GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult.md) |  | [optional] 
**session_info** | [**GoogleCloudDialogflowCxV3SessionInfo**](GoogleCloudDialogflowCxV3SessionInfo.md) |  | [optional] 
**text** | **str** | If natural language text was provided as input, this field will contain a copy of the text. | [optional] 
**transcript** | **str** | If natural language speech audio was provided as input, this field will contain the transcript for the audio. | [optional] 
**trigger_event** | **str** | If an event was provided as input, this field will contain the name of the event. | [optional] 
**trigger_intent** | **str** | If an intent was provided as input, this field will contain a copy of the intent identifier. Format: &#x60;projects//locations//agents//intents/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_webhook_request import GoogleCloudDialogflowCxV3WebhookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3WebhookRequest from a JSON string
google_cloud_dialogflow_cx_v3_webhook_request_instance = GoogleCloudDialogflowCxV3WebhookRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3WebhookRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_webhook_request_dict = google_cloud_dialogflow_cx_v3_webhook_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3WebhookRequest from a dict
google_cloud_dialogflow_cx_v3_webhook_request_from_dict = GoogleCloudDialogflowCxV3WebhookRequest.from_dict(google_cloud_dialogflow_cx_v3_webhook_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


