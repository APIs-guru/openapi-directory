# FailedWebhook

Details about a failed webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | The webhook body. | [optional] 
**failure_time** | **int** | The time the webhook was added to the list of failed webhooks (that is, the time of the last failed retry). | 
**id** | **str** | The webhook ID, as sent in the &#x60;X-Atlassian-Webhook-Identifier&#x60; header with the webhook. | 
**url** | **str** | The original webhook destination. | 

## Example

```python
from openapi_client.models.failed_webhook import FailedWebhook

# TODO update the JSON string below
json = "{}"
# create an instance of FailedWebhook from a JSON string
failed_webhook_instance = FailedWebhook.from_json(json)
# print the JSON string representation of the object
print(FailedWebhook.to_json())

# convert the object into a dict
failed_webhook_dict = failed_webhook_instance.to_dict()
# create an instance of FailedWebhook from a dict
failed_webhook_from_dict = FailedWebhook.from_dict(failed_webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


