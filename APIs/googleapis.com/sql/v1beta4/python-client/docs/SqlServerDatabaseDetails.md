# SqlServerDatabaseDetails

Represents a Sql Server database on the Cloud SQL instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility_level** | **int** | The version of SQL Server with which the database is to be made compatible | [optional] 
**recovery_model** | **str** | The recovery model of a SQL Server database | [optional] 

## Example

```python
from openapi_client.models.sql_server_database_details import SqlServerDatabaseDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SqlServerDatabaseDetails from a JSON string
sql_server_database_details_instance = SqlServerDatabaseDetails.from_json(json)
# print the JSON string representation of the object
print(SqlServerDatabaseDetails.to_json())

# convert the object into a dict
sql_server_database_details_dict = sql_server_database_details_instance.to_dict()
# create an instance of SqlServerDatabaseDetails from a dict
sql_server_database_details_from_dict = SqlServerDatabaseDetails.from_dict(sql_server_database_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


