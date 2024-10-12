# WebhookTypes

All of the webhook types that we support

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**a** | [**EndpointDisabledEvent**](EndpointDisabledEvent.md) |  | 
**a1** | [**MessageAttemptFailingEvent**](MessageAttemptFailingEvent.md) |  | 
**a2** | [**BackgroundTaskFinishedEvent**](BackgroundTaskFinishedEvent.md) |  | 
**b** | [**EndpointCreatedEvent**](EndpointCreatedEvent.md) |  | 
**c** | [**EndpointUpdatedEvent**](EndpointUpdatedEvent.md) |  | 
**d** | [**EndpointDeletedEvent**](EndpointDeletedEvent.md) |  | 
**e** | [**MessageAttemptExhaustedEvent**](MessageAttemptExhaustedEvent.md) |  | 

## Example

```python
from openapi_client.models.webhook_types import WebhookTypes

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookTypes from a JSON string
webhook_types_instance = WebhookTypes.from_json(json)
# print the JSON string representation of the object
print(WebhookTypes.to_json())

# convert the object into a dict
webhook_types_dict = webhook_types_instance.to_dict()
# create an instance of WebhookTypes from a dict
webhook_types_from_dict = WebhookTypes.from_dict(webhook_types_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


