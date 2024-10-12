# PassportElementError

This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_hash** | **str** | Base64-encoded data hash | 
**field_name** | **str** | Name of the data field which has the error | 
**message** | **str** | Error message | 
**source** | **str** | Error source, must be *unspecified* | 
**type** | **str** | Type of element of the user&#39;s Telegram Passport which has the issue | 
**file_hash** | **str** | Base64-encoded file hash | 
**file_hashes** | **List[str]** | List of base64-encoded file hashes | 
**element_hash** | **str** | Base64-encoded element hash | 

## Example

```python
from openapi_client.models.passport_element_error import PassportElementError

# TODO update the JSON string below
json = "{}"
# create an instance of PassportElementError from a JSON string
passport_element_error_instance = PassportElementError.from_json(json)
# print the JSON string representation of the object
print(PassportElementError.to_json())

# convert the object into a dict
passport_element_error_dict = passport_element_error_instance.to_dict()
# create an instance of PassportElementError from a dict
passport_element_error_from_dict = PassportElementError.from_dict(passport_element_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


