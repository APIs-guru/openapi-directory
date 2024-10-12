# MediaFile

Information about each media file in the VAST.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitrate** | **str** | Bitrate of the video file, in Kbps. Can be used to filter the response of the creatives.list method. | [optional] 
**mime_type** | **str** | The MIME type of this media file. Can be used to filter the response of the creatives.list method. | [optional] 

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


