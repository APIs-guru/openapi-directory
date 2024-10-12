# StorageAccountKey

An access key for the storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | Name of the key. | [optional] [readonly] 
**permissions** | **str** | Permissions for the key -- read-only or full permissions. | [optional] [readonly] 
**value** | **str** | Base 64-encoded value of the key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_key import StorageAccountKey

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountKey from a JSON string
storage_account_key_instance = StorageAccountKey.from_json(json)
# print the JSON string representation of the object
print(StorageAccountKey.to_json())

# convert the object into a dict
storage_account_key_dict = storage_account_key_instance.to_dict()
# create an instance of StorageAccountKey from a dict
storage_account_key_from_dict = StorageAccountKey.from_dict(storage_account_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


