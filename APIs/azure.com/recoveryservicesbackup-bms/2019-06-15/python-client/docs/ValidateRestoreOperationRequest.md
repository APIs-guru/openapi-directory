# ValidateRestoreOperationRequest

AzureRestoreValidation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restore_request** | [**RestoreRequest**](RestoreRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.validate_restore_operation_request import ValidateRestoreOperationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateRestoreOperationRequest from a JSON string
validate_restore_operation_request_instance = ValidateRestoreOperationRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateRestoreOperationRequest.to_json())

# convert the object into a dict
validate_restore_operation_request_dict = validate_restore_operation_request_instance.to_dict()
# create an instance of ValidateRestoreOperationRequest from a dict
validate_restore_operation_request_from_dict = ValidateRestoreOperationRequest.from_dict(validate_restore_operation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


