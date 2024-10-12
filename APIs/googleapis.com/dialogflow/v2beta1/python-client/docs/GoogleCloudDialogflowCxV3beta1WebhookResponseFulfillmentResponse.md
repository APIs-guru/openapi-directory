# GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse

Represents a fulfillment response to the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merge_behavior** | **str** | Merge behavior for &#x60;messages&#x60;. | [optional] 
**messages** | [**List[GoogleCloudDialogflowCxV3beta1ResponseMessage]**](GoogleCloudDialogflowCxV3beta1ResponseMessage.md) | The list of rich message responses to present to the user. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_webhook_response_fulfillment_response import GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_webhook_response_fulfillment_response_instance = GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_webhook_response_fulfillment_response_dict = google_cloud_dialogflow_cx_v3beta1_webhook_response_fulfillment_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse from a dict
google_cloud_dialogflow_cx_v3beta1_webhook_response_fulfillment_response_from_dict = GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_webhook_response_fulfillment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


