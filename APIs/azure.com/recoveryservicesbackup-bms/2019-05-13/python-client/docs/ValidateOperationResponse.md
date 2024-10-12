# ValidateOperationResponse

Base class for validate operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validation_results** | [**List[ErrorDetail]**](ErrorDetail.md) | Gets the validation result | [optional] 

## Example

```python
from openapi_client.models.validate_operation_response import ValidateOperationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateOperationResponse from a JSON string
validate_operation_response_instance = ValidateOperationResponse.from_json(json)
# print the JSON string representation of the object
print(ValidateOperationResponse.to_json())

# convert the object into a dict
validate_operation_response_dict = validate_operation_response_instance.to_dict()
# create an instance of ValidateOperationResponse from a dict
validate_operation_response_from_dict = ValidateOperationResponse.from_dict(validate_operation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


