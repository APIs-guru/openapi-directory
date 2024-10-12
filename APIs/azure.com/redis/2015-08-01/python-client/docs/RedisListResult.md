# RedisListResult

The response of list Redis operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of locations. | [optional] 
**value** | [**List[RedisResource]**](RedisResource.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.redis_list_result import RedisListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RedisListResult from a JSON string
redis_list_result_instance = RedisListResult.from_json(json)
# print the JSON string representation of the object
print(RedisListResult.to_json())

# convert the object into a dict
redis_list_result_dict = redis_list_result_instance.to_dict()
# create an instance of RedisListResult from a dict
redis_list_result_from_dict = RedisListResult.from_dict(redis_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


