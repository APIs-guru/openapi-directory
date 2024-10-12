# OperationErrorErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | [Output Only] The error type identifier for this error. | [optional] 
**location** | **str** | [Output Only] Indicates the field in the request that caused the error. This property is optional. | [optional] 
**message** | **str** | [Output Only] An optional, human-readable error message. | [optional] 

## Example

```python
from openapi_client.models.operation_error_errors_inner import OperationErrorErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OperationErrorErrorsInner from a JSON string
operation_error_errors_inner_instance = OperationErrorErrorsInner.from_json(json)
# print the JSON string representation of the object
print(OperationErrorErrorsInner.to_json())

# convert the object into a dict
operation_error_errors_inner_dict = operation_error_errors_inner_instance.to_dict()
# create an instance of OperationErrorErrorsInner from a dict
operation_error_errors_inner_from_dict = OperationErrorErrorsInner.from_dict(operation_error_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


