# SkipValidationRequest

Wheither or not to skip the validation for this release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip_validation** | **bool** | true if we want to skip the validation, false otherwise | [optional] 

## Example

```python
from openapi_client.models.skip_validation_request import SkipValidationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SkipValidationRequest from a JSON string
skip_validation_request_instance = SkipValidationRequest.from_json(json)
# print the JSON string representation of the object
print(SkipValidationRequest.to_json())

# convert the object into a dict
skip_validation_request_dict = skip_validation_request_instance.to_dict()
# create an instance of SkipValidationRequest from a dict
skip_validation_request_from_dict = SkipValidationRequest.from_dict(skip_validation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


