# StorageAccountListKeysResult

The response from the ListKeys operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[StorageAccountKey]**](StorageAccountKey.md) | Gets the list of storage account keys and their properties for the specified storage account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_list_keys_result import StorageAccountListKeysResult

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountListKeysResult from a JSON string
storage_account_list_keys_result_instance = StorageAccountListKeysResult.from_json(json)
# print the JSON string representation of the object
print(StorageAccountListKeysResult.to_json())

# convert the object into a dict
storage_account_list_keys_result_dict = storage_account_list_keys_result_instance.to_dict()
# create an instance of StorageAccountListKeysResult from a dict
storage_account_list_keys_result_from_dict = StorageAccountListKeysResult.from_dict(storage_account_list_keys_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


