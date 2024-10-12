# CacheUpdateRequestProperties

Parameters supplied to the Update Cache operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | Runtime connection string to cache | [optional] 
**description** | **str** | Cache description | [optional] 
**resource_id** | **str** | Original uri of entity in external system cache points to | [optional] 

## Example

```python
from openapi_client.models.cache_update_request_properties import CacheUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CacheUpdateRequestProperties from a JSON string
cache_update_request_properties_instance = CacheUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(CacheUpdateRequestProperties.to_json())

# convert the object into a dict
cache_update_request_properties_dict = cache_update_request_properties_instance.to_dict()
# create an instance of CacheUpdateRequestProperties from a dict
cache_update_request_properties_from_dict = CacheUpdateRequestProperties.from_dict(cache_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


