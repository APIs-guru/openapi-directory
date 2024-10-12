# GoogleCloudDialogflowCxV3beta1Webhook

Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Indicates whether the webhook is disabled. | [optional] 
**display_name** | **str** | Required. The human-readable name of the webhook, unique within the agent. | [optional] 
**generic_web_service** | [**GoogleCloudDialogflowCxV3beta1WebhookGenericWebService**](GoogleCloudDialogflowCxV3beta1WebhookGenericWebService.md) |  | [optional] 
**name** | **str** | The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: &#x60;projects//locations//agents//webhooks/&#x60;. | [optional] 
**service_directory** | [**GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig**](GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig.md) |  | [optional] 
**timeout** | **str** | Webhook execution timeout. Execution is considered failed if Dialogflow doesn&#39;t receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_webhook import GoogleCloudDialogflowCxV3beta1Webhook

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1Webhook from a JSON string
google_cloud_dialogflow_cx_v3beta1_webhook_instance = GoogleCloudDialogflowCxV3beta1Webhook.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1Webhook.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_webhook_dict = google_cloud_dialogflow_cx_v3beta1_webhook_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1Webhook from a dict
google_cloud_dialogflow_cx_v3beta1_webhook_from_dict = GoogleCloudDialogflowCxV3beta1Webhook.from_dict(google_cloud_dialogflow_cx_v3beta1_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


