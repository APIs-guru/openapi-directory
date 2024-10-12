# RedisLinkedServer

Linked server Id

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Linked server Id. | [optional] [readonly] 

## Example

```python
from openapi_client.models.redis_linked_server import RedisLinkedServer

# TODO update the JSON string below
json = "{}"
# create an instance of RedisLinkedServer from a JSON string
redis_linked_server_instance = RedisLinkedServer.from_json(json)
# print the JSON string representation of the object
print(RedisLinkedServer.to_json())

# convert the object into a dict
redis_linked_server_dict = redis_linked_server_instance.to_dict()
# create an instance of RedisLinkedServer from a dict
redis_linked_server_from_dict = RedisLinkedServer.from_dict(redis_linked_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


