# ImportExportOperationResult

An ImportExport operation result resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ImportExportOperationResultProperties**](ImportExportOperationResultProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.import_export_operation_result import ImportExportOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExportOperationResult from a JSON string
import_export_operation_result_instance = ImportExportOperationResult.from_json(json)
# print the JSON string representation of the object
print(ImportExportOperationResult.to_json())

# convert the object into a dict
import_export_operation_result_dict = import_export_operation_result_instance.to_dict()
# create an instance of ImportExportOperationResult from a dict
import_export_operation_result_from_dict = ImportExportOperationResult.from_dict(import_export_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


