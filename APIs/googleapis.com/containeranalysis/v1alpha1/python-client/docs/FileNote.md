# FileNote

FileNote represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checksum** | **List[str]** | Provide a unique identifier to match analysis information on each specific file in a package | [optional] 
**file_type** | **str** | This field provides information about the type of file identified | [optional] 
**title** | **str** | Identify the full path and filename that corresponds to the file information in this section | [optional] 

## Example

```python
from openapi_client.models.file_note import FileNote

# TODO update the JSON string below
json = "{}"
# create an instance of FileNote from a JSON string
file_note_instance = FileNote.from_json(json)
# print the JSON string representation of the object
print(FileNote.to_json())

# convert the object into a dict
file_note_dict = file_note_instance.to_dict()
# create an instance of FileNote from a dict
file_note_from_dict = FileNote.from_dict(file_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


