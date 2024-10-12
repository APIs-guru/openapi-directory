# MediaFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**GetMediaFilesCode200ResponseAllOfLinks**](GetMediaFilesCode200ResponseAllOfLinks.md) |  | [optional] 
**code** | **str** | Media file code | [optional] 
**extension** | **str** | Extension of the media file | [optional] 
**mime_type** | **str** | Mime type of the media file | [optional] 
**original_filename** | **str** | Original filename of the media file | [optional] 
**size** | **int** | Size of the media file | [optional] 

## Example

```python
from openapi_client.models.media_file import MediaFile

# TODO update the JSON string below
json = "{}"
# create an instance of MediaFile from a JSON string
media_file_instance = MediaFile.from_json(json)
# print the JSON string representation of the object
print(MediaFile.to_json())

# convert the object into a dict
media_file_dict = media_file_instance.to_dict()
# create an instance of MediaFile from a dict
media_file_from_dict = MediaFile.from_dict(media_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


