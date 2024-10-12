# AzureSqlDatabaseOutputDataSource

Describes an Azure SQL database output data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AzureSqlDatabaseOutputDataSourceProperties**](AzureSqlDatabaseOutputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_sql_database_output_data_source import AzureSqlDatabaseOutputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSqlDatabaseOutputDataSource from a JSON string
azure_sql_database_output_data_source_instance = AzureSqlDatabaseOutputDataSource.from_json(json)
# print the JSON string representation of the object
print(AzureSqlDatabaseOutputDataSource.to_json())

# convert the object into a dict
azure_sql_database_output_data_source_dict = azure_sql_database_output_data_source_instance.to_dict()
# create an instance of AzureSqlDatabaseOutputDataSource from a dict
azure_sql_database_output_data_source_from_dict = AzureSqlDatabaseOutputDataSource.from_dict(azure_sql_database_output_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


