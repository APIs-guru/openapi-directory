# DatabaseAccountListReadOnlyKeysResult

The read-only access keys for the given database account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_readonly_master_key** | **str** | Base 64 encoded value of the primary read-only key. | [optional] [readonly] 
**secondary_readonly_master_key** | **str** | Base 64 encoded value of the secondary read-only key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_account_list_read_only_keys_result import DatabaseAccountListReadOnlyKeysResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseAccountListReadOnlyKeysResult from a JSON string
database_account_list_read_only_keys_result_instance = DatabaseAccountListReadOnlyKeysResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseAccountListReadOnlyKeysResult.to_json())

# convert the object into a dict
database_account_list_read_only_keys_result_dict = database_account_list_read_only_keys_result_instance.to_dict()
# create an instance of DatabaseAccountListReadOnlyKeysResult from a dict
database_account_list_read_only_keys_result_from_dict = DatabaseAccountListReadOnlyKeysResult.from_dict(database_account_list_read_only_keys_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


