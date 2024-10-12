# StoragePoolList

Pageable list of storage pools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[StoragePool]**](StoragePool.md) | List of storage pools. | [optional] 

## Example

```python
from openapi_client.models.storage_pool_list import StoragePoolList

# TODO update the JSON string below
json = "{}"
# create an instance of StoragePoolList from a JSON string
storage_pool_list_instance = StoragePoolList.from_json(json)
# print the JSON string representation of the object
print(StoragePoolList.to_json())

# convert the object into a dict
storage_pool_list_dict = storage_pool_list_instance.to_dict()
# create an instance of StoragePoolList from a dict
storage_pool_list_from_dict = StoragePoolList.from_dict(storage_pool_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


