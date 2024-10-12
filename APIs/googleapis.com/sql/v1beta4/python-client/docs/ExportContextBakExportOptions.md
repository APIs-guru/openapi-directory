# ExportContextBakExportOptions

Options for exporting BAK files (SQL Server-only)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bak_type** | **str** | Type of this bak file will be export, FULL or DIFF, SQL Server only | [optional] 
**copy_only** | **bool** | Deprecated: copy_only is deprecated. Use differential_base instead | [optional] 
**differential_base** | **bool** | Whether or not the backup can be used as a differential base copy_only backup can not be served as differential base | [optional] 
**stripe_count** | **int** | Option for specifying how many stripes to use for the export. If blank, and the value of the striped field is true, the number of stripes is automatically chosen. | [optional] 
**striped** | **bool** | Whether or not the export should be striped. | [optional] 

## Example

```python
from openapi_client.models.export_context_bak_export_options import ExportContextBakExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ExportContextBakExportOptions from a JSON string
export_context_bak_export_options_instance = ExportContextBakExportOptions.from_json(json)
# print the JSON string representation of the object
print(ExportContextBakExportOptions.to_json())

# convert the object into a dict
export_context_bak_export_options_dict = export_context_bak_export_options_instance.to_dict()
# create an instance of ExportContextBakExportOptions from a dict
export_context_bak_export_options_from_dict = ExportContextBakExportOptions.from_dict(export_context_bak_export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


