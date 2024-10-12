# PassportElementErrorSelfie

Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hash** | **str** | Base64-encoded hash of the file with the selfie | 
**message** | **str** | Error message | 
**source** | **str** | Error source, must be *selfie* | 
**type** | **str** | The section of the user&#39;s Telegram Passport which has the issue, one of “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport” | 

## Example

```python
from openapi_client.models.passport_element_error_selfie import PassportElementErrorSelfie

# TODO update the JSON string below
json = "{}"
# create an instance of PassportElementErrorSelfie from a JSON string
passport_element_error_selfie_instance = PassportElementErrorSelfie.from_json(json)
# print the JSON string representation of the object
print(PassportElementErrorSelfie.to_json())

# convert the object into a dict
passport_element_error_selfie_dict = passport_element_error_selfie_instance.to_dict()
# create an instance of PassportElementErrorSelfie from a dict
passport_element_error_selfie_from_dict = PassportElementErrorSelfie.from_dict(passport_element_error_selfie_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


