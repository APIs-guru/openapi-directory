# OperationError

An error that occurred during a backup creation operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Identifies the specific error that occurred. REQUIRED | [optional] 
**error_type** | **str** |  | [optional] 
**message** | **str** | Additional information about the error encountered. REQUIRED | [optional] 

## Example

```python
from openapi_client.models.operation_error import OperationError

# TODO update the JSON string below
json = "{}"
# create an instance of OperationError from a JSON string
operation_error_instance = OperationError.from_json(json)
# print the JSON string representation of the object
print(OperationError.to_json())

# convert the object into a dict
operation_error_dict = operation_error_instance.to_dict()
# create an instance of OperationError from a dict
operation_error_from_dict = OperationError.from_dict(operation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


