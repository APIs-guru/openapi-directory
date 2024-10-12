# WebhookKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.webhook_key import WebhookKey

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookKey from a JSON string
webhook_key_instance = WebhookKey.from_json(json)
# print the JSON string representation of the object
print(WebhookKey.to_json())

# convert the object into a dict
webhook_key_dict = webhook_key_instance.to_dict()
# create an instance of WebhookKey from a dict
webhook_key_from_dict = WebhookKey.from_dict(webhook_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


