# DatabaseAccountListConnectionStringsResult

The connection strings for the given database account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_strings** | [**List[DatabaseAccountConnectionString]**](DatabaseAccountConnectionString.md) | An array that contains the connection strings for the Cosmos DB account. | [optional] 

## Example

```python
from openapi_client.models.database_account_list_connection_strings_result import DatabaseAccountListConnectionStringsResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseAccountListConnectionStringsResult from a JSON string
database_account_list_connection_strings_result_instance = DatabaseAccountListConnectionStringsResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseAccountListConnectionStringsResult.to_json())

# convert the object into a dict
database_account_list_connection_strings_result_dict = database_account_list_connection_strings_result_instance.to_dict()
# create an instance of DatabaseAccountListConnectionStringsResult from a dict
database_account_list_connection_strings_result_from_dict = DatabaseAccountListConnectionStringsResult.from_dict(database_account_list_connection_strings_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


