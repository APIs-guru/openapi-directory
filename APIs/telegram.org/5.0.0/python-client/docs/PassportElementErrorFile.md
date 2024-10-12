# PassportElementErrorFile

Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hash** | **str** | Base64-encoded file hash | 
**message** | **str** | Error message | 
**source** | **str** | Error source, must be *file* | 
**type** | **str** | The section of the user&#39;s Telegram Passport which has the issue, one of “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration”, “temporary\\_registration” | 

## Example

```python
from openapi_client.models.passport_element_error_file import PassportElementErrorFile

# TODO update the JSON string below
json = "{}"
# create an instance of PassportElementErrorFile from a JSON string
passport_element_error_file_instance = PassportElementErrorFile.from_json(json)
# print the JSON string representation of the object
print(PassportElementErrorFile.to_json())

# convert the object into a dict
passport_element_error_file_dict = passport_element_error_file_instance.to_dict()
# create an instance of PassportElementErrorFile from a dict
passport_element_error_file_from_dict = PassportElementErrorFile.from_dict(passport_element_error_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


