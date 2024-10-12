# CacheHealth

An indication of cache health.  Gives more information about health than just that related to provisioning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | List of cache health states. | [optional] 
**status_description** | **str** | Describes explanation of state. | [optional] 

## Example

```python
from openapi_client.models.cache_health import CacheHealth

# TODO update the JSON string below
json = "{}"
# create an instance of CacheHealth from a JSON string
cache_health_instance = CacheHealth.from_json(json)
# print the JSON string representation of the object
print(CacheHealth.to_json())

# convert the object into a dict
cache_health_dict = cache_health_instance.to_dict()
# create an instance of CacheHealth from a dict
cache_health_from_dict = CacheHealth.from_dict(cache_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


