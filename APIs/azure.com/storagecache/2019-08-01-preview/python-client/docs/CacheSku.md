# CacheSku

Sku for the cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Sku name for this cache. | [optional] 

## Example

```python
from openapi_client.models.cache_sku import CacheSku

# TODO update the JSON string below
json = "{}"
# create an instance of CacheSku from a JSON string
cache_sku_instance = CacheSku.from_json(json)
# print the JSON string representation of the object
print(CacheSku.to_json())

# convert the object into a dict
cache_sku_dict = cache_sku_instance.to_dict()
# create an instance of CacheSku from a dict
cache_sku_from_dict = CacheSku.from_dict(cache_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


