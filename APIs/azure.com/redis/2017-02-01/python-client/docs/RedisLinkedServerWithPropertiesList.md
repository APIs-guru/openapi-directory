# RedisLinkedServerWithPropertiesList

List of linked servers (with properties) of a Redis cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[RedisLinkedServerWithProperties]**](RedisLinkedServerWithProperties.md) | List of linked servers (with properties) of a Redis cache. | 

## Example

```python
from openapi_client.models.redis_linked_server_with_properties_list import RedisLinkedServerWithPropertiesList

# TODO update the JSON string below
json = "{}"
# create an instance of RedisLinkedServerWithPropertiesList from a JSON string
redis_linked_server_with_properties_list_instance = RedisLinkedServerWithPropertiesList.from_json(json)
# print the JSON string representation of the object
print(RedisLinkedServerWithPropertiesList.to_json())

# convert the object into a dict
redis_linked_server_with_properties_list_dict = redis_linked_server_with_properties_list_instance.to_dict()
# create an instance of RedisLinkedServerWithPropertiesList from a dict
redis_linked_server_with_properties_list_from_dict = RedisLinkedServerWithPropertiesList.from_dict(redis_linked_server_with_properties_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


