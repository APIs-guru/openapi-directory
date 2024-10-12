# FaceDetectorPreset

Describes all the settings to be used when analyzing a video in order to detect all the faces present.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resolution** | **str** | Specifies the maximum resolution at which your video is analyzed. The default behavior is \&quot;SourceResolution,\&quot; which will keep the input video at its original resolution when analyzed. Using \&quot;StandardDefinition\&quot; will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to \&quot;StandardDefinition\&quot; will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics for details). However, faces that end up being too small in the resized video may not be detected. | [optional] 

## Example

```python
from openapi_client.models.face_detector_preset import FaceDetectorPreset

# TODO update the JSON string below
json = "{}"
# create an instance of FaceDetectorPreset from a JSON string
face_detector_preset_instance = FaceDetectorPreset.from_json(json)
# print the JSON string representation of the object
print(FaceDetectorPreset.to_json())

# convert the object into a dict
face_detector_preset_dict = face_detector_preset_instance.to_dict()
# create an instance of FaceDetectorPreset from a dict
face_detector_preset_from_dict = FaceDetectorPreset.from_dict(face_detector_preset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


