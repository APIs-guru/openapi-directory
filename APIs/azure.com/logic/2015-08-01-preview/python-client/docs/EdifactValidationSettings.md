# EdifactValidationSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_leading_and_trailing_spaces_and_zeroes** | **bool** | The value indicating whether to allow leading and trailing spaces and zeroes. | [optional] 
**check_duplicate_group_control_number** | **bool** | The value indicating whether to check for duplicate group control number. | [optional] 
**check_duplicate_interchange_control_number** | **bool** | The value indicating whether to check for duplicate interchange control number. | [optional] 
**check_duplicate_transaction_set_control_number** | **bool** | The value indicating whether to check for duplicate transaction set control number. | [optional] 
**interchange_control_number_validity_days** | **int** | The validity period of interchange control number. | [optional] 
**trailing_separator_policy** | [**TrailingSeparatorPolicy**](TrailingSeparatorPolicy.md) |  | [optional] 
**trim_leading_and_trailing_spaces_and_zeroes** | **bool** | The value indicating whether to trim leading and trailing spaces and zeroes. | [optional] 
**validate_character_set** | **bool** | The value indicating whether to validate character set in the message. | [optional] 
**validate_edi_types** | **bool** | The value indicating whether to Whether to validate EDI types. | [optional] 
**validate_xsd_types** | **bool** | The value indicating whether to Whether to validate XSD types. | [optional] 

## Example

```python
from openapi_client.models.edifact_validation_settings import EdifactValidationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactValidationSettings from a JSON string
edifact_validation_settings_instance = EdifactValidationSettings.from_json(json)
# print the JSON string representation of the object
print(EdifactValidationSettings.to_json())

# convert the object into a dict
edifact_validation_settings_dict = edifact_validation_settings_instance.to_dict()
# create an instance of EdifactValidationSettings from a dict
edifact_validation_settings_from_dict = EdifactValidationSettings.from_dict(edifact_validation_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


