# RedisRebootParameters

Specifies which Redis node(s) to reboot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reboot_type** | **str** | Which Redis node(s) to reboot. Depending on this value data loss is possible. | 
**shard_id** | **int** | If clustering is enabled, the ID of the shared be rebooted. | [optional] 

## Example

```python
from openapi_client.models.redis_reboot_parameters import RedisRebootParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RedisRebootParameters from a JSON string
redis_reboot_parameters_instance = RedisRebootParameters.from_json(json)
# print the JSON string representation of the object
print(RedisRebootParameters.to_json())

# convert the object into a dict
redis_reboot_parameters_dict = redis_reboot_parameters_instance.to_dict()
# create an instance of RedisRebootParameters from a dict
redis_reboot_parameters_from_dict = RedisRebootParameters.from_dict(redis_reboot_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


