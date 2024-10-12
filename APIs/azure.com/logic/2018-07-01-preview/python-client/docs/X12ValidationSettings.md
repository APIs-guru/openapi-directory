# X12ValidationSettings

The X12 agreement validation settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_leading_and_trailing_spaces_and_zeroes** | **bool** | The value indicating whether to allow leading and trailing spaces and zeroes. | 
**check_duplicate_group_control_number** | **bool** | The value indicating whether to check for duplicate group control number. | 
**check_duplicate_interchange_control_number** | **bool** | The value indicating whether to check for duplicate interchange control number. | 
**check_duplicate_transaction_set_control_number** | **bool** | The value indicating whether to check for duplicate transaction set control number. | 
**interchange_control_number_validity_days** | **int** | The validity period of interchange control number. | 
**trailing_separator_policy** | [**TrailingSeparatorPolicy**](TrailingSeparatorPolicy.md) |  | 
**trim_leading_and_trailing_spaces_and_zeroes** | **bool** | The value indicating whether to trim leading and trailing spaces and zeroes. | 
**validate_character_set** | **bool** | The value indicating whether to validate character set in the message. | 
**validate_edi_types** | **bool** | The value indicating whether to Whether to validate EDI types. | 
**validate_xsd_types** | **bool** | The value indicating whether to Whether to validate XSD types. | 

## Example

```python
from openapi_client.models.x12_validation_settings import X12ValidationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of X12ValidationSettings from a JSON string
x12_validation_settings_instance = X12ValidationSettings.from_json(json)
# print the JSON string representation of the object
print(X12ValidationSettings.to_json())

# convert the object into a dict
x12_validation_settings_dict = x12_validation_settings_instance.to_dict()
# create an instance of X12ValidationSettings from a dict
x12_validation_settings_from_dict = X12ValidationSettings.from_dict(x12_validation_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


