# WebhookConfigWrite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | **str** | an auth token, to be passed as the value for an HTTP Authorization header. | [optional] 
**name** | **str** | human readable name for this webhook e.g. for UI display. | [optional] 
**validation_url** | **str** | if supplied, the webhook config will be validated by checking that this URL returns a 2xx response. | [optional] 

## Example

```python
from openapi_client.models.webhook_config_write import WebhookConfigWrite

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookConfigWrite from a JSON string
webhook_config_write_instance = WebhookConfigWrite.from_json(json)
# print the JSON string representation of the object
print(WebhookConfigWrite.to_json())

# convert the object into a dict
webhook_config_write_dict = webhook_config_write_instance.to_dict()
# create an instance of WebhookConfigWrite from a dict
webhook_config_write_from_dict = WebhookConfigWrite.from_dict(webhook_config_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


