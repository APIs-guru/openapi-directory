# CacheGet200Response

Cache details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CacheListByService200ResponseValueInnerProperties**](CacheListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cache_get200_response import CacheGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CacheGet200Response from a JSON string
cache_get200_response_instance = CacheGet200Response.from_json(json)
# print the JSON string representation of the object
print(CacheGet200Response.to_json())

# convert the object into a dict
cache_get200_response_dict = cache_get200_response_instance.to_dict()
# create an instance of CacheGet200Response from a dict
cache_get200_response_from_dict = CacheGet200Response.from_dict(cache_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


