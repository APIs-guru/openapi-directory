# StorageAccountListResult

The list storage accounts operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[StorageAccount]**](StorageAccount.md) | The list of storage accounts and their properties. | [optional] 

## Example

```python
from openapi_client.models.storage_account_list_result import StorageAccountListResult

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountListResult from a JSON string
storage_account_list_result_instance = StorageAccountListResult.from_json(json)
# print the JSON string representation of the object
print(StorageAccountListResult.to_json())

# convert the object into a dict
storage_account_list_result_dict = storage_account_list_result_instance.to_dict()
# create an instance of StorageAccountListResult from a dict
storage_account_list_result_from_dict = StorageAccountListResult.from_dict(storage_account_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


