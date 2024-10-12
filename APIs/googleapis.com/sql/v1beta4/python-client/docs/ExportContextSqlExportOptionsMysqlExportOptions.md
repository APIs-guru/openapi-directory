# ExportContextSqlExportOptionsMysqlExportOptions

Options for exporting from MySQL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**master_data** | **int** | Option to include SQL statement required to set up replication. If set to &#x60;1&#x60;, the dump file includes a CHANGE MASTER TO statement with the binary log coordinates, and --set-gtid-purged is set to ON. If set to &#x60;2&#x60;, the CHANGE MASTER TO statement is written as a SQL comment and has no effect. If set to any value other than &#x60;1&#x60;, --set-gtid-purged is set to OFF. | [optional] 

## Example

```python
from openapi_client.models.export_context_sql_export_options_mysql_export_options import ExportContextSqlExportOptionsMysqlExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ExportContextSqlExportOptionsMysqlExportOptions from a JSON string
export_context_sql_export_options_mysql_export_options_instance = ExportContextSqlExportOptionsMysqlExportOptions.from_json(json)
# print the JSON string representation of the object
print(ExportContextSqlExportOptionsMysqlExportOptions.to_json())

# convert the object into a dict
export_context_sql_export_options_mysql_export_options_dict = export_context_sql_export_options_mysql_export_options_instance.to_dict()
# create an instance of ExportContextSqlExportOptionsMysqlExportOptions from a dict
export_context_sql_export_options_mysql_export_options_from_dict = ExportContextSqlExportOptionsMysqlExportOptions.from_dict(export_context_sql_export_options_mysql_export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


