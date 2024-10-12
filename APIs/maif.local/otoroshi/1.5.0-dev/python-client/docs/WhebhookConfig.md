# WhebhookConfig

The configuration for webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | **Dict[str, str]** | Optional headers | [optional] 
**url** | **List[str]** | URLs of the webhook | [optional] 

## Example

```python
from openapi_client.models.whebhook_config import WhebhookConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WhebhookConfig from a JSON string
whebhook_config_instance = WhebhookConfig.from_json(json)
# print the JSON string representation of the object
print(WhebhookConfig.to_json())

# convert the object into a dict
whebhook_config_dict = whebhook_config_instance.to_dict()
# create an instance of WhebhookConfig from a dict
whebhook_config_from_dict = WhebhookConfig.from_dict(whebhook_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


