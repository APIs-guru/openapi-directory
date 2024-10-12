# ExportContextCsvExportOptions

Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**escape_character** | **str** | Specifies the character that should appear before a data character that needs to be escaped. | [optional] 
**fields_terminated_by** | **str** | Specifies the character that separates columns within each row (line) of the file. | [optional] 
**lines_terminated_by** | **str** | This is used to separate lines. If a line does not contain all fields, the rest of the columns are set to their default values. | [optional] 
**quote_character** | **str** | Specifies the quoting character to be used when a data value is quoted. | [optional] 
**select_query** | **str** | The select query used to extract the data. | [optional] 

## Example

```python
from openapi_client.models.export_context_csv_export_options import ExportContextCsvExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ExportContextCsvExportOptions from a JSON string
export_context_csv_export_options_instance = ExportContextCsvExportOptions.from_json(json)
# print the JSON string representation of the object
print(ExportContextCsvExportOptions.to_json())

# convert the object into a dict
export_context_csv_export_options_dict = export_context_csv_export_options_instance.to_dict()
# create an instance of ExportContextCsvExportOptions from a dict
export_context_csv_export_options_from_dict = ExportContextCsvExportOptions.from_dict(export_context_csv_export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


