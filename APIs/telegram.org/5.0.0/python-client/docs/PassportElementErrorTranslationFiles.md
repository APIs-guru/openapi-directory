# PassportElementErrorTranslationFiles

Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hashes** | **List[str]** | List of base64-encoded file hashes | 
**message** | **str** | Error message | 
**source** | **str** | Error source, must be *translation\\_files* | 
**type** | **str** | Type of element of the user&#39;s Telegram Passport which has the issue, one of “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”, “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration”, “temporary\\_registration” | 

## Example

```python
from openapi_client.models.passport_element_error_translation_files import PassportElementErrorTranslationFiles

# TODO update the JSON string below
json = "{}"
# create an instance of PassportElementErrorTranslationFiles from a JSON string
passport_element_error_translation_files_instance = PassportElementErrorTranslationFiles.from_json(json)
# print the JSON string representation of the object
print(PassportElementErrorTranslationFiles.to_json())

# convert the object into a dict
passport_element_error_translation_files_dict = passport_element_error_translation_files_instance.to_dict()
# create an instance of PassportElementErrorTranslationFiles from a dict
passport_element_error_translation_files_from_dict = PassportElementErrorTranslationFiles.from_dict(passport_element_error_translation_files_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


