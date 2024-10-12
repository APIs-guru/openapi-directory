# FileVideoMediaMetadata

Output only. Additional metadata about video media. This may not be available immediately upon upload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_millis** | **str** | Output only. The duration of the video in milliseconds. | [optional] 
**height** | **int** | Output only. The height of the video in pixels. | [optional] 
**width** | **int** | Output only. The width of the video in pixels. | [optional] 

## Example

```python
from openapi_client.models.file_video_media_metadata import FileVideoMediaMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of FileVideoMediaMetadata from a JSON string
file_video_media_metadata_instance = FileVideoMediaMetadata.from_json(json)
# print the JSON string representation of the object
print(FileVideoMediaMetadata.to_json())

# convert the object into a dict
file_video_media_metadata_dict = file_video_media_metadata_instance.to_dict()
# create an instance of FileVideoMediaMetadata from a dict
file_video_media_metadata_from_dict = FileVideoMediaMetadata.from_dict(file_video_media_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


