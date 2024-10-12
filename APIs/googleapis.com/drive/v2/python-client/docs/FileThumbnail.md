# FileThumbnail

A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **bytearray** | The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5. | [optional] 
**mime_type** | **str** | The MIME type of the thumbnail. | [optional] 

## Example

```python
from openapi_client.models.file_thumbnail import FileThumbnail

# TODO update the JSON string below
json = "{}"
# create an instance of FileThumbnail from a JSON string
file_thumbnail_instance = FileThumbnail.from_json(json)
# print the JSON string representation of the object
print(FileThumbnail.to_json())

# convert the object into a dict
file_thumbnail_dict = file_thumbnail_instance.to_dict()
# create an instance of FileThumbnail from a dict
file_thumbnail_from_dict = FileThumbnail.from_dict(file_thumbnail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


