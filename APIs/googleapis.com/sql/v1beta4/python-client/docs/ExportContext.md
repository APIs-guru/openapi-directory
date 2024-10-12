# ExportContext

Database instance export context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bak_export_options** | [**ExportContextBakExportOptions**](ExportContextBakExportOptions.md) |  | [optional] 
**csv_export_options** | [**ExportContextCsvExportOptions**](ExportContextCsvExportOptions.md) |  | [optional] 
**databases** | **List[str]** | Databases to be exported. &#x60;MySQL instances:&#x60; If &#x60;fileType&#x60; is &#x60;SQL&#x60; and no database is specified, all databases are exported, except for the &#x60;mysql&#x60; system database. If &#x60;fileType&#x60; is &#x60;CSV&#x60;, you can specify one database, either by using this property or by using the &#x60;csvExportOptions.selectQuery&#x60; property, which takes precedence over this property. &#x60;PostgreSQL instances:&#x60; You must specify one database to be exported. If &#x60;fileType&#x60; is &#x60;CSV&#x60;, this database must match the one specified in the &#x60;csvExportOptions.selectQuery&#x60; property. &#x60;SQL Server instances:&#x60; You must specify one database to be exported, and the &#x60;fileType&#x60; must be &#x60;BAK&#x60;. | [optional] 
**file_type** | **str** | The file type for the specified uri. | [optional] 
**kind** | **str** | This is always &#x60;sql#exportContext&#x60;. | [optional] 
**offload** | **bool** | Option for export offload. | [optional] 
**sql_export_options** | [**ExportContextSqlExportOptions**](ExportContextSqlExportOptions.md) |  | [optional] 
**uri** | **str** | The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form &#x60;gs://bucketName/fileName&#x60;. If the file already exists, the request succeeds, but the operation fails. If &#x60;fileType&#x60; is &#x60;SQL&#x60; and the filename ends with .gz, the contents are compressed. | [optional] 

## Example

```python
from openapi_client.models.export_context import ExportContext

# TODO update the JSON string below
json = "{}"
# create an instance of ExportContext from a JSON string
export_context_instance = ExportContext.from_json(json)
# print the JSON string representation of the object
print(ExportContext.to_json())

# convert the object into a dict
export_context_dict = export_context_instance.to_dict()
# create an instance of ExportContext from a dict
export_context_from_dict = ExportContext.from_dict(export_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


