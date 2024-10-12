# GoogleCloudDialogflowV2WebhookRequest

The request message for a webhook call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_detect_intent_request** | [**GoogleCloudDialogflowV2OriginalDetectIntentRequest**](GoogleCloudDialogflowV2OriginalDetectIntentRequest.md) |  | [optional] 
**query_result** | [**GoogleCloudDialogflowV2QueryResult**](GoogleCloudDialogflowV2QueryResult.md) |  | [optional] 
**response_id** | **str** | The unique identifier of the response. Contains the same value as &#x60;[Streaming]DetectIntentResponse.response_id&#x60;. | [optional] 
**session** | **str** | The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Format: &#x60;projects//agent/sessions/&#x60;, or &#x60;projects//agent/environments//users//sessions/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_webhook_request import GoogleCloudDialogflowV2WebhookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2WebhookRequest from a JSON string
google_cloud_dialogflow_v2_webhook_request_instance = GoogleCloudDialogflowV2WebhookRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2WebhookRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_webhook_request_dict = google_cloud_dialogflow_v2_webhook_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2WebhookRequest from a dict
google_cloud_dialogflow_v2_webhook_request_from_dict = GoogleCloudDialogflowV2WebhookRequest.from_dict(google_cloud_dialogflow_v2_webhook_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


