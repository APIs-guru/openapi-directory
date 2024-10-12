# ImportContextCsvImportOptions

Options for importing data as CSV.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** | The columns to which CSV data is imported. If not specified, all columns of the database table are loaded with CSV data. | [optional] 
**escape_character** | **str** | Specifies the character that should appear before a data character that needs to be escaped. | [optional] 
**fields_terminated_by** | **str** | Specifies the character that separates columns within each row (line) of the file. | [optional] 
**lines_terminated_by** | **str** | This is used to separate lines. If a line does not contain all fields, the rest of the columns are set to their default values. | [optional] 
**quote_character** | **str** | Specifies the quoting character to be used when a data value is quoted. | [optional] 
**table** | **str** | The table to which CSV data is imported. | [optional] 

## Example

```python
from openapi_client.models.import_context_csv_import_options import ImportContextCsvImportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ImportContextCsvImportOptions from a JSON string
import_context_csv_import_options_instance = ImportContextCsvImportOptions.from_json(json)
# print the JSON string representation of the object
print(ImportContextCsvImportOptions.to_json())

# convert the object into a dict
import_context_csv_import_options_dict = import_context_csv_import_options_instance.to_dict()
# create an instance of ImportContextCsvImportOptions from a dict
import_context_csv_import_options_from_dict = ImportContextCsvImportOptions.from_dict(import_context_csv_import_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


