# CacheListByService200Response

Paged Caches list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[CacheListByService200ResponseValueInner]**](CacheListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.cache_list_by_service200_response import CacheListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CacheListByService200Response from a JSON string
cache_list_by_service200_response_instance = CacheListByService200Response.from_json(json)
# print the JSON string representation of the object
print(CacheListByService200Response.to_json())

# convert the object into a dict
cache_list_by_service200_response_dict = cache_list_by_service200_response_instance.to_dict()
# create an instance of CacheListByService200Response from a dict
cache_list_by_service200_response_from_dict = CacheListByService200Response.from_dict(cache_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


