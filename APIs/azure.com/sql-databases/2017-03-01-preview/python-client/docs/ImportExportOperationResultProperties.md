# ImportExportOperationResultProperties

Contains the operation result properties for import/export operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_uri** | **str** | Blob Uri. | [optional] [readonly] 
**database_name** | **str** | Database name. | [optional] [readonly] 
**error_message** | **str** | Error message. | [optional] [readonly] 
**last_modified_time** | **str** | Last modified time. | [optional] [readonly] 
**queued_time** | **str** | Queued time. | [optional] [readonly] 
**request_id** | **str** | Request Id. | [optional] [readonly] 
**request_type** | **str** | Request type. | [optional] [readonly] 
**server_name** | **str** | Server name. | [optional] [readonly] 
**status** | **str** | Operation status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.import_export_operation_result_properties import ImportExportOperationResultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExportOperationResultProperties from a JSON string
import_export_operation_result_properties_instance = ImportExportOperationResultProperties.from_json(json)
# print the JSON string representation of the object
print(ImportExportOperationResultProperties.to_json())

# convert the object into a dict
import_export_operation_result_properties_dict = import_export_operation_result_properties_instance.to_dict()
# create an instance of ImportExportOperationResultProperties from a dict
import_export_operation_result_properties_from_dict = ImportExportOperationResultProperties.from_dict(import_export_operation_result_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


