# CacheInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**last_refresh_time** | **datetime** |  | [optional] 
**scheduled_expiration_time** | **datetime** |  | [optional] 
**user** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**will_refresh_after** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.cache_instance import CacheInstance

# TODO update the JSON string below
json = "{}"
# create an instance of CacheInstance from a JSON string
cache_instance_instance = CacheInstance.from_json(json)
# print the JSON string representation of the object
print(CacheInstance.to_json())

# convert the object into a dict
cache_instance_dict = cache_instance_instance.to_dict()
# create an instance of CacheInstance from a dict
cache_instance_from_dict = CacheInstance.from_dict(cache_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


