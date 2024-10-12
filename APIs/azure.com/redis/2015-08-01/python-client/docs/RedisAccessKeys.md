# RedisAccessKeys

Redis cache access keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | The current primary key that clients can use to authenticate with Redis cache. | [optional] 
**secondary_key** | **str** | The current secondary key that clients can use to authenticate with Redis cache. | [optional] 

## Example

```python
from openapi_client.models.redis_access_keys import RedisAccessKeys

# TODO update the JSON string below
json = "{}"
# create an instance of RedisAccessKeys from a JSON string
redis_access_keys_instance = RedisAccessKeys.from_json(json)
# print the JSON string representation of the object
print(RedisAccessKeys.to_json())

# convert the object into a dict
redis_access_keys_dict = redis_access_keys_instance.to_dict()
# create an instance of RedisAccessKeys from a dict
redis_access_keys_from_dict = RedisAccessKeys.from_dict(redis_access_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


