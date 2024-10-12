# CallbackConfig

The configuration of service URI and custom headers for the webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_headers** | **Dict[str, str]** | Custom headers that will be added to the webhook notifications. | [optional] 
**service_uri** | **str** | The service URI for the webhook to post notifications. | 

## Example

```python
from openapi_client.models.callback_config import CallbackConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CallbackConfig from a JSON string
callback_config_instance = CallbackConfig.from_json(json)
# print the JSON string representation of the object
print(CallbackConfig.to_json())

# convert the object into a dict
callback_config_dict = callback_config_instance.to_dict()
# create an instance of CallbackConfig from a dict
callback_config_from_dict = CallbackConfig.from_dict(callback_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


