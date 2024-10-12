# AddActionWebhookRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | 
**opts** | [**AddActionWebhookRequestConfigOpts**](AddActionWebhookRequestConfigOpts.md) |  | 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_webhook_request_config import AddActionWebhookRequestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionWebhookRequestConfig from a JSON string
add_action_webhook_request_config_instance = AddActionWebhookRequestConfig.from_json(json)
# print the JSON string representation of the object
print(AddActionWebhookRequestConfig.to_json())

# convert the object into a dict
add_action_webhook_request_config_dict = add_action_webhook_request_config_instance.to_dict()
# create an instance of AddActionWebhookRequestConfig from a dict
add_action_webhook_request_config_from_dict = AddActionWebhookRequestConfig.from_dict(add_action_webhook_request_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


