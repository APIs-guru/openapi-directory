# WebhookTriggersShares


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_submit** | **bool** | Send webhook messages when a receive folder form is submitted. | [optional] 

## Example

```python
from openapi_client.models.webhook_triggers_shares import WebhookTriggersShares

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookTriggersShares from a JSON string
webhook_triggers_shares_instance = WebhookTriggersShares.from_json(json)
# print the JSON string representation of the object
print(WebhookTriggersShares.to_json())

# convert the object into a dict
webhook_triggers_shares_dict = webhook_triggers_shares_instance.to_dict()
# create an instance of WebhookTriggersShares from a dict
webhook_triggers_shares_from_dict = WebhookTriggersShares.from_dict(webhook_triggers_shares_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


