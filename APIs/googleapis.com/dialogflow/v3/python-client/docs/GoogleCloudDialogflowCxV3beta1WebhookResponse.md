# GoogleCloudDialogflowCxV3beta1WebhookResponse

The response message for a webhook call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillment_response** | [**GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse**](GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse.md) |  | [optional] 
**page_info** | [**GoogleCloudDialogflowCxV3beta1PageInfo**](GoogleCloudDialogflowCxV3beta1PageInfo.md) |  | [optional] 
**payload** | **Dict[str, object]** | Value to append directly to QueryResult.webhook_payloads. | [optional] 
**session_info** | [**GoogleCloudDialogflowCxV3beta1SessionInfo**](GoogleCloudDialogflowCxV3beta1SessionInfo.md) |  | [optional] 
**target_flow** | **str** | The target flow to transition to. Format: &#x60;projects//locations//agents//flows/&#x60;. | [optional] 
**target_page** | **str** | The target page to transition to. Format: &#x60;projects//locations//agents//flows//pages/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_webhook_response import GoogleCloudDialogflowCxV3beta1WebhookResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1WebhookResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_webhook_response_instance = GoogleCloudDialogflowCxV3beta1WebhookResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1WebhookResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_webhook_response_dict = google_cloud_dialogflow_cx_v3beta1_webhook_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1WebhookResponse from a dict
google_cloud_dialogflow_cx_v3beta1_webhook_response_from_dict = GoogleCloudDialogflowCxV3beta1WebhookResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_webhook_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


