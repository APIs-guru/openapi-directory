# Transcode

Represents information about the transcoded audio or video file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_bit_rate_kbps** | **str** | The bit rate for the audio stream of the transcoded video, or the bit rate for the transcoded audio, in kilobits per second. | [optional] 
**audio_sample_rate_hz** | **str** | The sample rate for the audio stream of the transcoded video, or the sample rate for the transcoded audio, in hertz. | [optional] 
**bit_rate_kbps** | **str** | The transcoding bit rate of the transcoded video, in kilobits per second. | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**file_size_bytes** | **str** | The size of the transcoded file, in bytes. | [optional] 
**frame_rate** | **float** | The frame rate of the transcoded video, in frames per second. | [optional] 
**mime_type** | **str** | The MIME type of the transcoded file. | [optional] 
**name** | **str** | The name of the transcoded file. | [optional] 
**transcoded** | **bool** | Indicates if the transcoding was successful. | [optional] 

## Example

```python
from openapi_client.models.transcode import Transcode

# TODO update the JSON string below
json = "{}"
# create an instance of Transcode from a JSON string
transcode_instance = Transcode.from_json(json)
# print the JSON string representation of the object
print(Transcode.to_json())

# convert the object into a dict
transcode_dict = transcode_instance.to_dict()
# create an instance of Transcode from a dict
transcode_from_dict = Transcode.from_dict(transcode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


