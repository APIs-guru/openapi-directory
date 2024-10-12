# RedisLinkedServerList

List of linked server Ids of a Redis cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[RedisLinkedServer]**](RedisLinkedServer.md) | List of linked server Ids of a Redis cache. | 

## Example

```python
from openapi_client.models.redis_linked_server_list import RedisLinkedServerList

# TODO update the JSON string below
json = "{}"
# create an instance of RedisLinkedServerList from a JSON string
redis_linked_server_list_instance = RedisLinkedServerList.from_json(json)
# print the JSON string representation of the object
print(RedisLinkedServerList.to_json())

# convert the object into a dict
redis_linked_server_list_dict = redis_linked_server_list_instance.to_dict()
# create an instance of RedisLinkedServerList from a dict
redis_linked_server_list_from_dict = RedisLinkedServerList.from_dict(redis_linked_server_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


