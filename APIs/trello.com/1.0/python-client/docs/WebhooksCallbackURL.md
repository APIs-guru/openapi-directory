# WebhooksCallbackURL


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | A valid URL that is reachable with a HEAD request | [optional] 

## Example

```python
from openapi_client.models.webhooks_callback_url import WebhooksCallbackURL

# TODO update the JSON string below
json = "{}"
# create an instance of WebhooksCallbackURL from a JSON string
webhooks_callback_url_instance = WebhooksCallbackURL.from_json(json)
# print the JSON string representation of the object
print(WebhooksCallbackURL.to_json())

# convert the object into a dict
webhooks_callback_url_dict = webhooks_callback_url_instance.to_dict()
# create an instance of WebhooksCallbackURL from a dict
webhooks_callback_url_from_dict = WebhooksCallbackURL.from_dict(webhooks_callback_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


