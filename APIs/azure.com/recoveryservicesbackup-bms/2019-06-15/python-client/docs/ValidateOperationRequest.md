# ValidateOperationRequest

Base class for validate operation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 

## Example

```python
from openapi_client.models.validate_operation_request import ValidateOperationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateOperationRequest from a JSON string
validate_operation_request_instance = ValidateOperationRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateOperationRequest.to_json())

# convert the object into a dict
validate_operation_request_dict = validate_operation_request_instance.to_dict()
# create an instance of ValidateOperationRequest from a dict
validate_operation_request_from_dict = ValidateOperationRequest.from_dict(validate_operation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


