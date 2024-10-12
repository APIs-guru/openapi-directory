# ValidateResponse

Describes the result of resource validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ValidateResponseError**](ValidateResponseError.md) |  | [optional] 
**status** | **str** | Result of validation. | [optional] 

## Example

```python
from openapi_client.models.validate_response import ValidateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateResponse from a JSON string
validate_response_instance = ValidateResponse.from_json(json)
# print the JSON string representation of the object
print(ValidateResponse.to_json())

# convert the object into a dict
validate_response_dict = validate_response_instance.to_dict()
# create an instance of ValidateResponse from a dict
validate_response_from_dict = ValidateResponse.from_dict(validate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


