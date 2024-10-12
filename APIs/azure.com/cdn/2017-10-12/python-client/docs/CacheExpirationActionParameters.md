# CacheExpirationActionParameters

Defines the parameters for the cache expiration action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**cache_behavior** | **str** | Caching behavior for the requests that include query strings. | 
**cache_duration** | **str** | The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss | [optional] 
**cache_type** | **str** | The level at which the content needs to be cached. | 

## Example

```python
from openapi_client.models.cache_expiration_action_parameters import CacheExpirationActionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CacheExpirationActionParameters from a JSON string
cache_expiration_action_parameters_instance = CacheExpirationActionParameters.from_json(json)
# print the JSON string representation of the object
print(CacheExpirationActionParameters.to_json())

# convert the object into a dict
cache_expiration_action_parameters_dict = cache_expiration_action_parameters_instance.to_dict()
# create an instance of CacheExpirationActionParameters from a dict
cache_expiration_action_parameters_from_dict = CacheExpirationActionParameters.from_dict(cache_expiration_action_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


