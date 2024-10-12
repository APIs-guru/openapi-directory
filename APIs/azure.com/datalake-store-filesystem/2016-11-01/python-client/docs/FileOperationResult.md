# FileOperationResult

The result of the request or operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean** | **bool** | the result of the operation or request. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_operation_result import FileOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of FileOperationResult from a JSON string
file_operation_result_instance = FileOperationResult.from_json(json)
# print the JSON string representation of the object
print(FileOperationResult.to_json())

# convert the object into a dict
file_operation_result_dict = file_operation_result_instance.to_dict()
# create an instance of FileOperationResult from a dict
file_operation_result_from_dict = FileOperationResult.from_dict(file_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


