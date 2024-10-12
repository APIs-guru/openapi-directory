# AsyncModerationCallbackConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** |  | [optional] 
**server_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.async_moderation_callback_config_request import AsyncModerationCallbackConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncModerationCallbackConfigRequest from a JSON string
async_moderation_callback_config_request_instance = AsyncModerationCallbackConfigRequest.from_json(json)
# print the JSON string representation of the object
print(AsyncModerationCallbackConfigRequest.to_json())

# convert the object into a dict
async_moderation_callback_config_request_dict = async_moderation_callback_config_request_instance.to_dict()
# create an instance of AsyncModerationCallbackConfigRequest from a dict
async_moderation_callback_config_request_from_dict = AsyncModerationCallbackConfigRequest.from_dict(async_moderation_callback_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


