# WebhookEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **str** | The service provider&#39;s ID of the entity that triggered this event | [optional] 
**entity_type** | **str** | The type entity that triggered this event | [optional] 
**entity_url** | **str** | The url to retrieve entity detail. | [optional] 
**event_id** | **str** | Unique reference to this request event | [optional] 
**event_type** | [**WebhookEventType**](WebhookEventType.md) |  | [optional] 
**execution_attempt** | **float** | The current count this request event has been attempted | [optional] 
**occurred_at** | **datetime** | ISO Datetime for when the original event occurred | [optional] 
**service_id** | **str** | Service provider identifier | [optional] 

## Example

```python
from openapi_client.models.webhook_event import WebhookEvent

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookEvent from a JSON string
webhook_event_instance = WebhookEvent.from_json(json)
# print the JSON string representation of the object
print(WebhookEvent.to_json())

# convert the object into a dict
webhook_event_dict = webhook_event_instance.to_dict()
# create an instance of WebhookEvent from a dict
webhook_event_from_dict = WebhookEvent.from_dict(webhook_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


