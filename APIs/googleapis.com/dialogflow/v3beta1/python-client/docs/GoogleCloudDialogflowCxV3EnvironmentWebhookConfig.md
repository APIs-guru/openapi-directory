# GoogleCloudDialogflowCxV3EnvironmentWebhookConfig

Configuration for webhooks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_overrides** | [**List[GoogleCloudDialogflowCxV3Webhook]**](GoogleCloudDialogflowCxV3Webhook.md) | The list of webhooks to override for the agent environment. The webhook must exist in the agent. You can override fields in &#x60;generic_web_service&#x60; and &#x60;service_directory&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_environment_webhook_config import GoogleCloudDialogflowCxV3EnvironmentWebhookConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3EnvironmentWebhookConfig from a JSON string
google_cloud_dialogflow_cx_v3_environment_webhook_config_instance = GoogleCloudDialogflowCxV3EnvironmentWebhookConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3EnvironmentWebhookConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_environment_webhook_config_dict = google_cloud_dialogflow_cx_v3_environment_webhook_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3EnvironmentWebhookConfig from a dict
google_cloud_dialogflow_cx_v3_environment_webhook_config_from_dict = GoogleCloudDialogflowCxV3EnvironmentWebhookConfig.from_dict(google_cloud_dialogflow_cx_v3_environment_webhook_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


