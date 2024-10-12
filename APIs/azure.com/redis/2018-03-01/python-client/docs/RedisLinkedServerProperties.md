# RedisLinkedServerProperties

Properties of a linked server to be returned in get/put response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Terminal state of the link between primary and secondary redis cache. | [optional] [readonly] 
**linked_redis_cache_id** | **str** | Fully qualified resourceId of the linked redis cache. | 
**linked_redis_cache_location** | **str** | Location of the linked redis cache. | 
**server_role** | **str** | Role of the linked server. | 

## Example

```python
from openapi_client.models.redis_linked_server_properties import RedisLinkedServerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RedisLinkedServerProperties from a JSON string
redis_linked_server_properties_instance = RedisLinkedServerProperties.from_json(json)
# print the JSON string representation of the object
print(RedisLinkedServerProperties.to_json())

# convert the object into a dict
redis_linked_server_properties_dict = redis_linked_server_properties_instance.to_dict()
# create an instance of RedisLinkedServerProperties from a dict
redis_linked_server_properties_from_dict = RedisLinkedServerProperties.from_dict(redis_linked_server_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


