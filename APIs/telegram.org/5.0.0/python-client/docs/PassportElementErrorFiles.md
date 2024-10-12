# PassportElementErrorFiles

Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hashes** | **List[str]** | List of base64-encoded file hashes | 
**message** | **str** | Error message | 
**source** | **str** | Error source, must be *files* | 
**type** | **str** | The section of the user&#39;s Telegram Passport which has the issue, one of “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration”, “temporary\\_registration” | 

## Example

```python
from openapi_client.models.passport_element_error_files import PassportElementErrorFiles

# TODO update the JSON string below
json = "{}"
# create an instance of PassportElementErrorFiles from a JSON string
passport_element_error_files_instance = PassportElementErrorFiles.from_json(json)
# print the JSON string representation of the object
print(PassportElementErrorFiles.to_json())

# convert the object into a dict
passport_element_error_files_dict = passport_element_error_files_instance.to_dict()
# create an instance of PassportElementErrorFiles from a dict
passport_element_error_files_from_dict = PassportElementErrorFiles.from_dict(passport_element_error_files_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


