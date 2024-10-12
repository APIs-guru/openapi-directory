# CacheKeyQueryStringActionParameters

Defines the parameters for the cache-key query string action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**query_parameters** | **str** | query parameters to include or exclude (comma separated). | [optional] 
**query_string_behavior** | **str** | Caching behavior for the requests | 

## Example

```python
from openapi_client.models.cache_key_query_string_action_parameters import CacheKeyQueryStringActionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CacheKeyQueryStringActionParameters from a JSON string
cache_key_query_string_action_parameters_instance = CacheKeyQueryStringActionParameters.from_json(json)
# print the JSON string representation of the object
print(CacheKeyQueryStringActionParameters.to_json())

# convert the object into a dict
cache_key_query_string_action_parameters_dict = cache_key_query_string_action_parameters_instance.to_dict()
# create an instance of CacheKeyQueryStringActionParameters from a dict
cache_key_query_string_action_parameters_from_dict = CacheKeyQueryStringActionParameters.from_dict(cache_key_query_string_action_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


