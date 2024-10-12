# AsyncModerationConfigurationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | [**AsyncModerationCallbackConfigRequest**](AsyncModerationCallbackConfigRequest.md) |  | [optional] 
**timeout_ms** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.async_moderation_configuration_request import AsyncModerationConfigurationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncModerationConfigurationRequest from a JSON string
async_moderation_configuration_request_instance = AsyncModerationConfigurationRequest.from_json(json)
# print the JSON string representation of the object
print(AsyncModerationConfigurationRequest.to_json())

# convert the object into a dict
async_moderation_configuration_request_dict = async_moderation_configuration_request_instance.to_dict()
# create an instance of AsyncModerationConfigurationRequest from a dict
async_moderation_configuration_request_from_dict = AsyncModerationConfigurationRequest.from_dict(async_moderation_configuration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


