# RedisListKeysResult

The response of Redis list keys operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | The current primary key that clients can use to authenticate with Redis cache. | [optional] 
**secondary_key** | **str** | The current secondary key that clients can use to authenticate with Redis cache. | [optional] 

## Example

```python
from openapi_client.models.redis_list_keys_result import RedisListKeysResult

# TODO update the JSON string below
json = "{}"
# create an instance of RedisListKeysResult from a JSON string
redis_list_keys_result_instance = RedisListKeysResult.from_json(json)
# print the JSON string representation of the object
print(RedisListKeysResult.to_json())

# convert the object into a dict
redis_list_keys_result_dict = redis_list_keys_result_instance.to_dict()
# create an instance of RedisListKeysResult from a dict
redis_list_keys_result_from_dict = RedisListKeysResult.from_dict(redis_list_keys_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


