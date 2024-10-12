# WebhookNotification

Webhook notification of an autoscale event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, str]** | a property bag of settings. This value can be empty. | [optional] 
**service_uri** | **str** | the service address to receive the notification. | [optional] 

## Example

```python
from openapi_client.models.webhook_notification import WebhookNotification

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookNotification from a JSON string
webhook_notification_instance = WebhookNotification.from_json(json)
# print the JSON string representation of the object
print(WebhookNotification.to_json())

# convert the object into a dict
webhook_notification_dict = webhook_notification_instance.to_dict()
# create an instance of WebhookNotification from a dict
webhook_notification_from_dict = WebhookNotification.from_dict(webhook_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


