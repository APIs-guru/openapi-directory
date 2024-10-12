# ValidateOperationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validate_operation_response** | [**ValidateOperationResponse**](ValidateOperationResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.validate_operations_response import ValidateOperationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateOperationsResponse from a JSON string
validate_operations_response_instance = ValidateOperationsResponse.from_json(json)
# print the JSON string representation of the object
print(ValidateOperationsResponse.to_json())

# convert the object into a dict
validate_operations_response_dict = validate_operations_response_instance.to_dict()
# create an instance of ValidateOperationsResponse from a dict
validate_operations_response_from_dict = ValidateOperationsResponse.from_dict(validate_operations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


