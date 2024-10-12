# ExportModelOperationMetadata

Details of ExportModel operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_info** | [**ExportModelOutputInfo**](ExportModelOutputInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_model_operation_metadata import ExportModelOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ExportModelOperationMetadata from a JSON string
export_model_operation_metadata_instance = ExportModelOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(ExportModelOperationMetadata.to_json())

# convert the object into a dict
export_model_operation_metadata_dict = export_model_operation_metadata_instance.to_dict()
# create an instance of ExportModelOperationMetadata from a dict
export_model_operation_metadata_from_dict = ExportModelOperationMetadata.from_dict(export_model_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


