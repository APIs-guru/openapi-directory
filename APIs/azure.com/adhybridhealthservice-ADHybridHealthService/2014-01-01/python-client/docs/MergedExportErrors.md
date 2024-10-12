# MergedExportErrors

The list of export errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MergedExportError]**](MergedExportError.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.merged_export_errors import MergedExportErrors

# TODO update the JSON string below
json = "{}"
# create an instance of MergedExportErrors from a JSON string
merged_export_errors_instance = MergedExportErrors.from_json(json)
# print the JSON string representation of the object
print(MergedExportErrors.to_json())

# convert the object into a dict
merged_export_errors_dict = merged_export_errors_instance.to_dict()
# create an instance of MergedExportErrors from a dict
merged_export_errors_from_dict = MergedExportErrors.from_dict(merged_export_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


