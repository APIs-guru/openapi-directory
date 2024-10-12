# RedisLinkedServerWithProperties

Response to put/get linked server (with properties) for Redis cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**properties** | [**RedisLinkedServerProperties**](RedisLinkedServerProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.redis_linked_server_with_properties import RedisLinkedServerWithProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RedisLinkedServerWithProperties from a JSON string
redis_linked_server_with_properties_instance = RedisLinkedServerWithProperties.from_json(json)
# print the JSON string representation of the object
print(RedisLinkedServerWithProperties.to_json())

# convert the object into a dict
redis_linked_server_with_properties_dict = redis_linked_server_with_properties_instance.to_dict()
# create an instance of RedisLinkedServerWithProperties from a dict
redis_linked_server_with_properties_from_dict = RedisLinkedServerWithProperties.from_dict(redis_linked_server_with_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


