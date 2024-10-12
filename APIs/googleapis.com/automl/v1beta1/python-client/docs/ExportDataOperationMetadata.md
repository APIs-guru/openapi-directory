# ExportDataOperationMetadata

Details of ExportData operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_info** | [**ExportDataOutputInfo**](ExportDataOutputInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_data_operation_metadata import ExportDataOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ExportDataOperationMetadata from a JSON string
export_data_operation_metadata_instance = ExportDataOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(ExportDataOperationMetadata.to_json())

# convert the object into a dict
export_data_operation_metadata_dict = export_data_operation_metadata_instance.to_dict()
# create an instance of ExportDataOperationMetadata from a dict
export_data_operation_metadata_from_dict = ExportDataOperationMetadata.from_dict(export_data_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


