# StoragePool

Representation of a storage pool resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StoragePoolModel**](StoragePoolModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_pool import StoragePool

# TODO update the JSON string below
json = "{}"
# create an instance of StoragePool from a JSON string
storage_pool_instance = StoragePool.from_json(json)
# print the JSON string representation of the object
print(StoragePool.to_json())

# convert the object into a dict
storage_pool_dict = storage_pool_instance.to_dict()
# create an instance of StoragePool from a dict
storage_pool_from_dict = StoragePool.from_dict(storage_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


