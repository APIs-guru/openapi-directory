# PassportElementErrorReverseSide

Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hash** | **str** | Base64-encoded hash of the file with the reverse side of the document | 
**message** | **str** | Error message | 
**source** | **str** | Error source, must be *reverse\\_side* | 
**type** | **str** | The section of the user&#39;s Telegram Passport which has the issue, one of “driver\\_license”, “identity\\_card” | 

## Example

```python
from openapi_client.models.passport_element_error_reverse_side import PassportElementErrorReverseSide

# TODO update the JSON string below
json = "{}"
# create an instance of PassportElementErrorReverseSide from a JSON string
passport_element_error_reverse_side_instance = PassportElementErrorReverseSide.from_json(json)
# print the JSON string representation of the object
print(PassportElementErrorReverseSide.to_json())

# convert the object into a dict
passport_element_error_reverse_side_dict = passport_element_error_reverse_side_instance.to_dict()
# create an instance of PassportElementErrorReverseSide from a dict
passport_element_error_reverse_side_from_dict = PassportElementErrorReverseSide.from_dict(passport_element_error_reverse_side_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


