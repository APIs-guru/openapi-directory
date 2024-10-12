# PassportElementErrorTranslationFile

Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hash** | **str** | Base64-encoded file hash | 
**message** | **str** | Error message | 
**source** | **str** | Error source, must be *translation\\_file* | 
**type** | **str** | Type of element of the user&#39;s Telegram Passport which has the issue, one of “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”, “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration”, “temporary\\_registration” | 

## Example

```python
from openapi_client.models.passport_element_error_translation_file import PassportElementErrorTranslationFile

# TODO update the JSON string below
json = "{}"
# create an instance of PassportElementErrorTranslationFile from a JSON string
passport_element_error_translation_file_instance = PassportElementErrorTranslationFile.from_json(json)
# print the JSON string representation of the object
print(PassportElementErrorTranslationFile.to_json())

# convert the object into a dict
passport_element_error_translation_file_dict = passport_element_error_translation_file_instance.to_dict()
# create an instance of PassportElementErrorTranslationFile from a dict
passport_element_error_translation_file_from_dict = PassportElementErrorTranslationFile.from_dict(passport_element_error_translation_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


