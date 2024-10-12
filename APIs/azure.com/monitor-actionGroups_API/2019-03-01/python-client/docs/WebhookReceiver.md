# WebhookReceiver

A webhook receiver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the webhook receiver. Names must be unique across all receivers within an action group. | 
**service_uri** | **str** | The URI where webhooks should be sent. | 
**use_common_alert_schema** | **bool** | Indicates whether to use common alert schema. | 

## Example

```python
from openapi_client.models.webhook_receiver import WebhookReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookReceiver from a JSON string
webhook_receiver_instance = WebhookReceiver.from_json(json)
# print the JSON string representation of the object
print(WebhookReceiver.to_json())

# convert the object into a dict
webhook_receiver_dict = webhook_receiver_instance.to_dict()
# create an instance of WebhookReceiver from a dict
webhook_receiver_from_dict = WebhookReceiver.from_dict(webhook_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


