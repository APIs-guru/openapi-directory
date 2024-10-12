# WebhookSupport

How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_via** | **str** | How the subscription is managed in the downstream. | [optional] 
**mode** | **str** | Mode of the webhook support. | [optional] 
**subscription_level** | **str** | Received events are scoped to connection or across integration. | [optional] 
**virtual_webhooks** | [**VirtualWebhooks**](VirtualWebhooks.md) |  | [optional] 

## Example

```python
from openapi_client.models.webhook_support import WebhookSupport

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookSupport from a JSON string
webhook_support_instance = WebhookSupport.from_json(json)
# print the JSON string representation of the object
print(WebhookSupport.to_json())

# convert the object into a dict
webhook_support_dict = webhook_support_instance.to_dict()
# create an instance of WebhookSupport from a dict
webhook_support_from_dict = WebhookSupport.from_dict(webhook_support_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


