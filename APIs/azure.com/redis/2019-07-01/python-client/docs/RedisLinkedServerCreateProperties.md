# RedisLinkedServerCreateProperties

Create properties for a linked server

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linked_redis_cache_id** | **str** | Fully qualified resourceId of the linked redis cache. | 
**linked_redis_cache_location** | **str** | Location of the linked redis cache. | 
**server_role** | **str** | Role of the linked server. | 

## Example

```python
from openapi_client.models.redis_linked_server_create_properties import RedisLinkedServerCreateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RedisLinkedServerCreateProperties from a JSON string
redis_linked_server_create_properties_instance = RedisLinkedServerCreateProperties.from_json(json)
# print the JSON string representation of the object
print(RedisLinkedServerCreateProperties.to_json())

# convert the object into a dict
redis_linked_server_create_properties_dict = redis_linked_server_create_properties_instance.to_dict()
# create an instance of RedisLinkedServerCreateProperties from a dict
redis_linked_server_create_properties_from_dict = RedisLinkedServerCreateProperties.from_dict(redis_linked_server_create_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


