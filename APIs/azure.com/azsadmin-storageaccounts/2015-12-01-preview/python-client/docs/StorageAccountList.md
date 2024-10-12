# StorageAccountList

Pageable list of storage accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] [readonly] 
**value** | [**List[StorageAccount]**](StorageAccount.md) | List of storage accounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.storage_account_list import StorageAccountList

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountList from a JSON string
storage_account_list_instance = StorageAccountList.from_json(json)
# print the JSON string representation of the object
print(StorageAccountList.to_json())

# convert the object into a dict
storage_account_list_dict = storage_account_list_instance.to_dict()
# create an instance of StorageAccountList from a dict
storage_account_list_from_dict = StorageAccountList.from_dict(storage_account_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


