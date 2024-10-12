# WebhookConfigRead

the readable info for a webhook config; omits sensitive info e.g. auth token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** | human-readable name e.g. for display in UI | [optional] 

## Example

```python
from openapi_client.models.webhook_config_read import WebhookConfigRead

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookConfigRead from a JSON string
webhook_config_read_instance = WebhookConfigRead.from_json(json)
# print the JSON string representation of the object
print(WebhookConfigRead.to_json())

# convert the object into a dict
webhook_config_read_dict = webhook_config_read_instance.to_dict()
# create an instance of WebhookConfigRead from a dict
webhook_config_read_from_dict = WebhookConfigRead.from_dict(webhook_config_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


