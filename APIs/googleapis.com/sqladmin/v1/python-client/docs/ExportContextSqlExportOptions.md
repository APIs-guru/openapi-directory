# ExportContextSqlExportOptions

Options for exporting data as SQL statements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mysql_export_options** | [**ExportContextSqlExportOptionsMysqlExportOptions**](ExportContextSqlExportOptionsMysqlExportOptions.md) |  | [optional] 
**parallel** | **bool** | Optional. Whether or not the export should be parallel. | [optional] 
**schema_only** | **bool** | Export only schemas. | [optional] 
**tables** | **List[str]** | Tables to export, or that were exported, from the specified database. If you specify tables, specify one and only one database. For PostgreSQL instances, you can specify only one table. | [optional] 
**threads** | **int** | Optional. The number of threads to use for parallel export. | [optional] 

## Example

```python
from openapi_client.models.export_context_sql_export_options import ExportContextSqlExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ExportContextSqlExportOptions from a JSON string
export_context_sql_export_options_instance = ExportContextSqlExportOptions.from_json(json)
# print the JSON string representation of the object
print(ExportContextSqlExportOptions.to_json())

# convert the object into a dict
export_context_sql_export_options_dict = export_context_sql_export_options_instance.to_dict()
# create an instance of ExportContextSqlExportOptions from a dict
export_context_sql_export_options_from_dict = ExportContextSqlExportOptions.from_dict(export_context_sql_export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


