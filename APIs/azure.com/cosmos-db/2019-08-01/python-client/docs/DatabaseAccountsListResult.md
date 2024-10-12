# DatabaseAccountsListResult

The List operation response, that contains the database accounts and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DatabaseAccountGetResults]**](DatabaseAccountGetResults.md) | List of database account and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_accounts_list_result import DatabaseAccountsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseAccountsListResult from a JSON string
database_accounts_list_result_instance = DatabaseAccountsListResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseAccountsListResult.to_json())

# convert the object into a dict
database_accounts_list_result_dict = database_accounts_list_result_instance.to_dict()
# create an instance of DatabaseAccountsListResult from a dict
database_accounts_list_result_from_dict = DatabaseAccountsListResult.from_dict(database_accounts_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


