# FileContentHintsThumbnail

A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **bytearray** | The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5). | [optional] 
**mime_type** | **str** | The MIME type of the thumbnail. | [optional] 

## Example

```python
from openapi_client.models.file_content_hints_thumbnail import FileContentHintsThumbnail

# TODO update the JSON string below
json = "{}"
# create an instance of FileContentHintsThumbnail from a JSON string
file_content_hints_thumbnail_instance = FileContentHintsThumbnail.from_json(json)
# print the JSON string representation of the object
print(FileContentHintsThumbnail.to_json())

# convert the object into a dict
file_content_hints_thumbnail_dict = file_content_hints_thumbnail_instance.to_dict()
# create an instance of FileContentHintsThumbnail from a dict
file_content_hints_thumbnail_from_dict = FileContentHintsThumbnail.from_dict(file_content_hints_thumbnail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


