# GoogleCloudDialogflowCxV3Fulfillment

A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_settings** | [**GoogleCloudDialogflowCxV3AdvancedSettings**](GoogleCloudDialogflowCxV3AdvancedSettings.md) |  | [optional] 
**conditional_cases** | [**List[GoogleCloudDialogflowCxV3FulfillmentConditionalCases]**](GoogleCloudDialogflowCxV3FulfillmentConditionalCases.md) | Conditional cases for this fulfillment. | [optional] 
**enable_generative_fallback** | **bool** | If the flag is true, the agent will utilize LLM to generate a text response. If LLM generation fails, the defined responses in the fulfillment will be respected. This flag is only useful for fulfillments associated with no-match event handlers. | [optional] 
**messages** | [**List[GoogleCloudDialogflowCxV3ResponseMessage]**](GoogleCloudDialogflowCxV3ResponseMessage.md) | The list of rich message responses to present to the user. | [optional] 
**return_partial_responses** | **bool** | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks. | [optional] 
**set_parameter_actions** | [**List[GoogleCloudDialogflowCxV3FulfillmentSetParameterAction]**](GoogleCloudDialogflowCxV3FulfillmentSetParameterAction.md) | Set parameter values before executing the webhook. | [optional] 
**tag** | **str** | The value of this field will be populated in the WebhookRequest &#x60;fulfillmentInfo.tag&#x60; field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. This field is required if &#x60;webhook&#x60; is specified. | [optional] 
**webhook** | **str** | The webhook to call. Format: &#x60;projects//locations//agents//webhooks/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_fulfillment import GoogleCloudDialogflowCxV3Fulfillment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3Fulfillment from a JSON string
google_cloud_dialogflow_cx_v3_fulfillment_instance = GoogleCloudDialogflowCxV3Fulfillment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3Fulfillment.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_fulfillment_dict = google_cloud_dialogflow_cx_v3_fulfillment_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3Fulfillment from a dict
google_cloud_dialogflow_cx_v3_fulfillment_from_dict = GoogleCloudDialogflowCxV3Fulfillment.from_dict(google_cloud_dialogflow_cx_v3_fulfillment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


