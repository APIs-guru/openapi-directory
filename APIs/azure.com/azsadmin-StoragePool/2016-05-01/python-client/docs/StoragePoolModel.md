# StoragePoolModel

All properties of a storage pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size_gb** | **int** | Amount of space in the storage pool in GB. | [optional] 

## Example

```python
from openapi_client.models.storage_pool_model import StoragePoolModel

# TODO update the JSON string below
json = "{}"
# create an instance of StoragePoolModel from a JSON string
storage_pool_model_instance = StoragePoolModel.from_json(json)
# print the JSON string representation of the object
print(StoragePoolModel.to_json())

# convert the object into a dict
storage_pool_model_dict = storage_pool_model_instance.to_dict()
# create an instance of StoragePoolModel from a dict
storage_pool_model_from_dict = StoragePoolModel.from_dict(storage_pool_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


