# WebhookSubscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | The date and time the webhook subscription was created downstream | [optional] 
**downstream_event_types** | **List[str]** | The list of downstream Events this connection is subscribed to | [optional] 
**downstream_id** | **str** | The ID of the downstream service | [optional] 
**execute_url** | **str** | The URL the downstream is sending to when the event is triggered | [optional] 
**unify_event_types** | **List[str]** | The list of Unify Events this connection is subscribed to | [optional] 

## Example

```python
from openapi_client.models.webhook_subscription import WebhookSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookSubscription from a JSON string
webhook_subscription_instance = WebhookSubscription.from_json(json)
# print the JSON string representation of the object
print(WebhookSubscription.to_json())

# convert the object into a dict
webhook_subscription_dict = webhook_subscription_instance.to_dict()
# create an instance of WebhookSubscription from a dict
webhook_subscription_from_dict = WebhookSubscription.from_dict(webhook_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


