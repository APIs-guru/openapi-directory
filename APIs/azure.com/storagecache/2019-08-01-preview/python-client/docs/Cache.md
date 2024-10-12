# Cache

A cache instance.  Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A fully qualified URL. | [optional] 
**location** | **str** | Region name string. | [optional] 
**name** | **str** | Schema for the name of resources served by this provider.   Note that objects will contain an odata @id annotation as appropriate, this will contain the complete URL of the object.   These names are case-preserving, but not case sensitive. | [optional] 
**properties** | [**CacheProperties**](CacheProperties.md) |  | [optional] 
**sku** | [**CacheSku**](CacheSku.md) |  | [optional] 
**tags** | **object** | ARM tags as name/value pairs. | [optional] 
**type** | **str** | Type for the cache; Microsoft.StorageCache/Cache | [optional] [readonly] 

## Example

```python
from openapi_client.models.cache import Cache

# TODO update the JSON string below
json = "{}"
# create an instance of Cache from a JSON string
cache_instance = Cache.from_json(json)
# print the JSON string representation of the object
print(Cache.to_json())

# convert the object into a dict
cache_dict = cache_instance.to_dict()
# create an instance of Cache from a dict
cache_from_dict = Cache.from_dict(cache_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


