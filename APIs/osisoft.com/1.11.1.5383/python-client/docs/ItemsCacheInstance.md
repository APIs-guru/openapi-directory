# ItemsCacheInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[CacheInstance]**](CacheInstance.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_cache_instance import ItemsCacheInstance

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsCacheInstance from a JSON string
items_cache_instance_instance = ItemsCacheInstance.from_json(json)
# print the JSON string representation of the object
print(ItemsCacheInstance.to_json())

# convert the object into a dict
items_cache_instance_dict = items_cache_instance_instance.to_dict()
# create an instance of ItemsCacheInstance from a dict
items_cache_instance_from_dict = ItemsCacheInstance.from_dict(items_cache_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


