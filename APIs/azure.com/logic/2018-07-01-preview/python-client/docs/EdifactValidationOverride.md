# EdifactValidationOverride

The Edifact validation override settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_leading_and_trailing_spaces_and_zeroes** | **bool** | The value indicating whether to allow leading and trailing spaces and zeroes. | 
**enforce_character_set** | **bool** | The value indicating whether to validate character Set. | 
**message_id** | **str** | The message id on which the validation settings has to be applied. | 
**trailing_separator_policy** | [**TrailingSeparatorPolicy**](TrailingSeparatorPolicy.md) |  | 
**trim_leading_and_trailing_spaces_and_zeroes** | **bool** | The value indicating whether to trim leading and trailing spaces and zeroes. | 
**validate_edi_types** | **bool** | The value indicating whether to validate EDI types. | 
**validate_xsd_types** | **bool** | The value indicating whether to validate XSD types. | 

## Example

```python
from openapi_client.models.edifact_validation_override import EdifactValidationOverride

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactValidationOverride from a JSON string
edifact_validation_override_instance = EdifactValidationOverride.from_json(json)
# print the JSON string representation of the object
print(EdifactValidationOverride.to_json())

# convert the object into a dict
edifact_validation_override_dict = edifact_validation_override_instance.to_dict()
# create an instance of EdifactValidationOverride from a dict
edifact_validation_override_from_dict = EdifactValidationOverride.from_dict(edifact_validation_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


