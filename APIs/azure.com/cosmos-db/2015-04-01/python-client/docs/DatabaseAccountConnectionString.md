# DatabaseAccountConnectionString

Connection string for the Cosmos DB account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | Value of the connection string | [optional] [readonly] 
**description** | **str** | Description of the connection string | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_account_connection_string import DatabaseAccountConnectionString

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseAccountConnectionString from a JSON string
database_account_connection_string_instance = DatabaseAccountConnectionString.from_json(json)
# print the JSON string representation of the object
print(DatabaseAccountConnectionString.to_json())

# convert the object into a dict
database_account_connection_string_dict = database_account_connection_string_instance.to_dict()
# create an instance of DatabaseAccountConnectionString from a dict
database_account_connection_string_from_dict = DatabaseAccountConnectionString.from_dict(database_account_connection_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


