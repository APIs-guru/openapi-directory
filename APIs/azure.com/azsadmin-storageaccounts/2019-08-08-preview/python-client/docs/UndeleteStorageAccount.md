# UndeleteStorageAccount

Undelete storage account information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The internal wac id for storage account. | [optional] [readonly] 
**new_account_name** | **str** | The new account name for the restored account if defined. | [optional] [readonly] 

## Example

```python
from openapi_client.models.undelete_storage_account import UndeleteStorageAccount

# TODO update the JSON string below
json = "{}"
# create an instance of UndeleteStorageAccount from a JSON string
undelete_storage_account_instance = UndeleteStorageAccount.from_json(json)
# print the JSON string representation of the object
print(UndeleteStorageAccount.to_json())

# convert the object into a dict
undelete_storage_account_dict = undelete_storage_account_instance.to_dict()
# create an instance of UndeleteStorageAccount from a dict
undelete_storage_account_from_dict = UndeleteStorageAccount.from_dict(undelete_storage_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


