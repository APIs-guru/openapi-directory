# ValidateResponseError

Error details for when validation fails.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Validation error code. | [optional] 
**message** | **str** | Validation error message. | [optional] 

## Example

```python
from openapi_client.models.validate_response_error import ValidateResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateResponseError from a JSON string
validate_response_error_instance = ValidateResponseError.from_json(json)
# print the JSON string representation of the object
print(ValidateResponseError.to_json())

# convert the object into a dict
validate_response_error_dict = validate_response_error_instance.to_dict()
# create an instance of ValidateResponseError from a dict
validate_response_error_from_dict = ValidateResponseError.from_dict(validate_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


