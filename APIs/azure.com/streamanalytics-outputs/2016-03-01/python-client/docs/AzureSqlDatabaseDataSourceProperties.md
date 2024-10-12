# AzureSqlDatabaseDataSourceProperties

The properties that are associated with an Azure SQL database data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests. | [optional] 
**password** | **str** | The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. | [optional] 
**server** | **str** | The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests. | [optional] 
**table** | **str** | The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests. | [optional] 
**user** | **str** | The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.azure_sql_database_data_source_properties import AzureSqlDatabaseDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSqlDatabaseDataSourceProperties from a JSON string
azure_sql_database_data_source_properties_instance = AzureSqlDatabaseDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(AzureSqlDatabaseDataSourceProperties.to_json())

# convert the object into a dict
azure_sql_database_data_source_properties_dict = azure_sql_database_data_source_properties_instance.to_dict()
# create an instance of AzureSqlDatabaseDataSourceProperties from a dict
azure_sql_database_data_source_properties_from_dict = AzureSqlDatabaseDataSourceProperties.from_dict(azure_sql_database_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


