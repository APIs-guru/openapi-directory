# GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo

Represents fulfillment information communicated to the webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** | Always present. The value of the Fulfillment.tag field will be populated in this field by Dialogflow when the associated webhook is called. The tag is typically used by the webhook service to identify which fulfillment is being called, but it could be used for other purposes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_webhook_request_fulfillment_info import GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo from a JSON string
google_cloud_dialogflow_cx_v3beta1_webhook_request_fulfillment_info_instance = GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_webhook_request_fulfillment_info_dict = google_cloud_dialogflow_cx_v3beta1_webhook_request_fulfillment_info_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo from a dict
google_cloud_dialogflow_cx_v3beta1_webhook_request_fulfillment_info_from_dict = GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo.from_dict(google_cloud_dialogflow_cx_v3beta1_webhook_request_fulfillment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


