# WebhookIntegration

Configuration details for [webhooks](https://support.smartbear.com/swaggerhub/docs/integrations/webhook.html)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the integration is enabled or disabled | [optional] [default to True]
**id** | **str** | ID of the integration | [optional] [readonly] 
**name** | **str** | The display name of the integration. Must be unique among all integrations configured for the given API version. | 
**additional_headers** | **List[str]** | Custom HTTP headers to be sent with the webhook. Use the \&quot;name: value\&quot; format for each header. | [optional] 
**config_type** | **str** | Integration type | 
**content_type** | **str** | Webhook content type | 
**life_cycle_events** | **List[str]** | Events that will trigger the webhook | [optional] 
**url** | **str** | The URL to send the webhook to | 

## Example

```python
from openapi_client.models.webhook_integration import WebhookIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookIntegration from a JSON string
webhook_integration_instance = WebhookIntegration.from_json(json)
# print the JSON string representation of the object
print(WebhookIntegration.to_json())

# convert the object into a dict
webhook_integration_dict = webhook_integration_instance.to_dict()
# create an instance of WebhookIntegration from a dict
webhook_integration_from_dict = WebhookIntegration.from_dict(webhook_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


