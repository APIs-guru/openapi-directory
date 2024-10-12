# RedisLinkedServerCreateParameters

Parameter required for creating a linked server to redis cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RedisLinkedServerCreateProperties**](RedisLinkedServerCreateProperties.md) |  | 

## Example

```python
from openapi_client.models.redis_linked_server_create_parameters import RedisLinkedServerCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RedisLinkedServerCreateParameters from a JSON string
redis_linked_server_create_parameters_instance = RedisLinkedServerCreateParameters.from_json(json)
# print the JSON string representation of the object
print(RedisLinkedServerCreateParameters.to_json())

# convert the object into a dict
redis_linked_server_create_parameters_dict = redis_linked_server_create_parameters_instance.to_dict()
# create an instance of RedisLinkedServerCreateParameters from a dict
redis_linked_server_create_parameters_from_dict = RedisLinkedServerCreateParameters.from_dict(redis_linked_server_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


