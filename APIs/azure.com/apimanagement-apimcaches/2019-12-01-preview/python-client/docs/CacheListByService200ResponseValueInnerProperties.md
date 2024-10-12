# CacheListByService200ResponseValueInnerProperties

Properties of the Cache contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | Runtime connection string to cache | 
**description** | **str** | Cache description | [optional] 
**resource_id** | **str** | Original uri of entity in external system cache points to | [optional] 

## Example

```python
from openapi_client.models.cache_list_by_service200_response_value_inner_properties import CacheListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CacheListByService200ResponseValueInnerProperties from a JSON string
cache_list_by_service200_response_value_inner_properties_instance = CacheListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(CacheListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
cache_list_by_service200_response_value_inner_properties_dict = cache_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of CacheListByService200ResponseValueInnerProperties from a dict
cache_list_by_service200_response_value_inner_properties_from_dict = CacheListByService200ResponseValueInnerProperties.from_dict(cache_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


