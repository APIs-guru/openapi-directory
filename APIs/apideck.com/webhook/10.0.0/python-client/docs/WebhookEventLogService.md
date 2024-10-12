# WebhookEventLogService

Apideck service provider associated with event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Apideck service provider id. | 
**name** | **str** | Apideck service provider name. | 

## Example

```python
from openapi_client.models.webhook_event_log_service import WebhookEventLogService

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookEventLogService from a JSON string
webhook_event_log_service_instance = WebhookEventLogService.from_json(json)
# print the JSON string representation of the object
print(WebhookEventLogService.to_json())

# convert the object into a dict
webhook_event_log_service_dict = webhook_event_log_service_instance.to_dict()
# create an instance of WebhookEventLogService from a dict
webhook_event_log_service_from_dict = WebhookEventLogService.from_dict(webhook_event_log_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


