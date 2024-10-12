# WebhookTriggers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | [**WebhookTriggersResources**](WebhookTriggersResources.md) |  | [optional] 
**shares** | [**WebhookTriggersShares**](WebhookTriggersShares.md) |  | [optional] 

## Example

```python
from openapi_client.models.webhook_triggers import WebhookTriggers

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookTriggers from a JSON string
webhook_triggers_instance = WebhookTriggers.from_json(json)
# print the JSON string representation of the object
print(WebhookTriggers.to_json())

# convert the object into a dict
webhook_triggers_dict = webhook_triggers_instance.to_dict()
# create an instance of WebhookTriggers from a dict
webhook_triggers_from_dict = WebhookTriggers.from_dict(webhook_triggers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


