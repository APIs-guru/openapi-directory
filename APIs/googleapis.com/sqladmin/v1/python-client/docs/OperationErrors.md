# OperationErrors

Database instance operation errors list wrapper.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[OperationError]**](OperationError.md) | The list of errors encountered while processing this operation. | [optional] 
**kind** | **str** | This is always &#x60;sql#operationErrors&#x60;. | [optional] 

## Example

```python
from openapi_client.models.operation_errors import OperationErrors

# TODO update the JSON string below
json = "{}"
# create an instance of OperationErrors from a JSON string
operation_errors_instance = OperationErrors.from_json(json)
# print the JSON string representation of the object
print(OperationErrors.to_json())

# convert the object into a dict
operation_errors_dict = operation_errors_instance.to_dict()
# create an instance of OperationErrors from a dict
operation_errors_from_dict = OperationErrors.from_dict(operation_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


