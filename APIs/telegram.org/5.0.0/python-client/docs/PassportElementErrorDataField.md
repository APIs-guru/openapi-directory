# PassportElementErrorDataField

Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_hash** | **str** | Base64-encoded data hash | 
**field_name** | **str** | Name of the data field which has the error | 
**message** | **str** | Error message | 
**source** | **str** | Error source, must be *data* | 
**type** | **str** | The section of the user&#39;s Telegram Passport which has the error, one of “personal\\_details”, “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”, “address” | 

## Example

```python
from openapi_client.models.passport_element_error_data_field import PassportElementErrorDataField

# TODO update the JSON string below
json = "{}"
# create an instance of PassportElementErrorDataField from a JSON string
passport_element_error_data_field_instance = PassportElementErrorDataField.from_json(json)
# print the JSON string representation of the object
print(PassportElementErrorDataField.to_json())

# convert the object into a dict
passport_element_error_data_field_dict = passport_element_error_data_field_instance.to_dict()
# create an instance of PassportElementErrorDataField from a dict
passport_element_error_data_field_from_dict = PassportElementErrorDataField.from_dict(passport_element_error_data_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


