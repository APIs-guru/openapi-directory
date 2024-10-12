# CacheConfiguration

Caching settings for a caching-type route. To disable caching, do not provide a cacheConfiguration object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_compression** | **str** | Whether to use dynamic compression for cached content | [optional] 
**query_parameter_strip_directive** | **str** | Treatment of URL query terms when forming the cache key. | [optional] 

## Example

```python
from openapi_client.models.cache_configuration import CacheConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CacheConfiguration from a JSON string
cache_configuration_instance = CacheConfiguration.from_json(json)
# print the JSON string representation of the object
print(CacheConfiguration.to_json())

# convert the object into a dict
cache_configuration_dict = cache_configuration_instance.to_dict()
# create an instance of CacheConfiguration from a dict
cache_configuration_from_dict = CacheConfiguration.from_dict(cache_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


