# RedisForceRebootResponse

Response to force reboot for Redis cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Status message | [optional] [readonly] 

## Example

```python
from openapi_client.models.redis_force_reboot_response import RedisForceRebootResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RedisForceRebootResponse from a JSON string
redis_force_reboot_response_instance = RedisForceRebootResponse.from_json(json)
# print the JSON string representation of the object
print(RedisForceRebootResponse.to_json())

# convert the object into a dict
redis_force_reboot_response_dict = redis_force_reboot_response_instance.to_dict()
# create an instance of RedisForceRebootResponse from a dict
redis_force_reboot_response_from_dict = RedisForceRebootResponse.from_dict(redis_force_reboot_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


