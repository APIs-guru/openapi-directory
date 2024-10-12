# GoogleCloudDialogflowV2WebhookResponse

The response message for a webhook call. This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error: - Use `\"\"` for empty strings - Use `{}` or `null` for empty objects - Use `[]` or `null` for empty arrays For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**followup_event_input** | [**GoogleCloudDialogflowV2EventInput**](GoogleCloudDialogflowV2EventInput.md) |  | [optional] 
**fulfillment_messages** | [**List[GoogleCloudDialogflowV2IntentMessage]**](GoogleCloudDialogflowV2IntentMessage.md) | Optional. The rich response messages intended for the end-user. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_messages sent to the integration or API caller. | [optional] 
**fulfillment_text** | **str** | Optional. The text response message intended for the end-user. It is recommended to use &#x60;fulfillment_messages.text.text[0]&#x60; instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller. | [optional] 
**output_contexts** | [**List[GoogleCloudDialogflowV2Context]**](GoogleCloudDialogflowV2Context.md) | Optional. The collection of output contexts that will overwrite currently active contexts for the session and reset their lifespans. When provided, Dialogflow uses this field to populate QueryResult.output_contexts sent to the integration or API caller. | [optional] 
**payload** | **Dict[str, object]** | Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json) | [optional] 
**session_entity_types** | [**List[GoogleCloudDialogflowV2SessionEntityType]**](GoogleCloudDialogflowV2SessionEntityType.md) | Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session. Setting this data from a webhook overwrites the session entity types that have been set using &#x60;detectIntent&#x60;, &#x60;streamingDetectIntent&#x60; or SessionEntityType management methods. | [optional] 
**source** | **str** | Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_webhook_response import GoogleCloudDialogflowV2WebhookResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2WebhookResponse from a JSON string
google_cloud_dialogflow_v2_webhook_response_instance = GoogleCloudDialogflowV2WebhookResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2WebhookResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_webhook_response_dict = google_cloud_dialogflow_v2_webhook_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2WebhookResponse from a dict
google_cloud_dialogflow_v2_webhook_response_from_dict = GoogleCloudDialogflowV2WebhookResponse.from_dict(google_cloud_dialogflow_v2_webhook_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


