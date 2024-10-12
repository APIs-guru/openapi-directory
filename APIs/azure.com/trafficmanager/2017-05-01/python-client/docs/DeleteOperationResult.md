# DeleteOperationResult

The result of the request or operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean** | **bool** | The result of the operation or request. | [optional] [readonly] 

## Example

```python
from openapi_client.models.delete_operation_result import DeleteOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteOperationResult from a JSON string
delete_operation_result_instance = DeleteOperationResult.from_json(json)
# print the JSON string representation of the object
print(DeleteOperationResult.to_json())

# convert the object into a dict
delete_operation_result_dict = delete_operation_result_instance.to_dict()
# create an instance of DeleteOperationResult from a dict
delete_operation_result_from_dict = DeleteOperationResult.from_dict(delete_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


