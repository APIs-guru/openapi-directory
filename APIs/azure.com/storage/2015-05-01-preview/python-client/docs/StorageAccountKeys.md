# StorageAccountKeys

The access keys for the storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key1** | **str** | Gets the value of key 1. | [optional] 
**key2** | **str** | Gets the value of key 2. | [optional] 

## Example

```python
from openapi_client.models.storage_account_keys import StorageAccountKeys

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountKeys from a JSON string
storage_account_keys_instance = StorageAccountKeys.from_json(json)
# print the JSON string representation of the object
print(StorageAccountKeys.to_json())

# convert the object into a dict
storage_account_keys_dict = storage_account_keys_instance.to_dict()
# create an instance of StorageAccountKeys from a dict
storage_account_keys_from_dict = StorageAccountKeys.from_dict(storage_account_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


