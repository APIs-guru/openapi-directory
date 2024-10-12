# PhotoSequence

A sequence of 360 photos along with metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capture_time_override** | **str** | Optional. Absolute time when the photo sequence starts to be captured. If the photo sequence is a video, this is the start time of the video. If this field is populated in input, it overrides the capture time in the video or XDM file. | [optional] 
**distance_meters** | **float** | Output only. The computed distance of the photo sequence in meters. | [optional] [readonly] 
**failure_details** | [**ProcessingFailureDetails**](ProcessingFailureDetails.md) |  | [optional] 
**failure_reason** | **str** | Output only. If this sequence has processing_state &#x3D; FAILED, this will contain the reason why it failed. If the processing_state is any other value, this field will be unset. | [optional] [readonly] 
**filename** | **str** | Output only. The filename of the upload. Does not include the directory path. Only available if the sequence was uploaded on a platform that provides the filename. | [optional] [readonly] 
**gps_source** | **str** | Input only. If both raw_gps_timeline and the Camera Motion Metadata Track (CAMM) contain GPS measurements, indicate which takes precedence. | [optional] 
**id** | **str** | Output only. Unique identifier for the photo sequence. This also acts as a long running operation ID if uploading is performed asynchronously. | [optional] [readonly] 
**imu** | [**Imu**](Imu.md) |  | [optional] 
**photos** | [**List[Photo]**](Photo.md) | Output only. Photos with increasing timestamps. | [optional] [readonly] 
**processing_state** | **str** | Output only. The processing state of this sequence. | [optional] [readonly] 
**raw_gps_timeline** | [**List[Pose]**](Pose.md) | Input only. Raw GPS measurements with increasing timestamps from the device that aren&#39;t time synced with each photo. These raw measurements will be used to infer the pose of each frame. Required in input when InputType is VIDEO and raw GPS measurements are not in Camera Motion Metadata Track (CAMM). User can indicate which takes precedence using gps_source if raw GPS measurements are provided in both raw_gps_timeline and Camera Motion Metadata Track (CAMM). | [optional] 
**sequence_bounds** | [**LatLngBounds**](LatLngBounds.md) |  | [optional] 
**upload_reference** | [**UploadRef**](UploadRef.md) |  | [optional] 
**upload_time** | **str** | Output only. The time this photo sequence was created in uSV Store service. | [optional] [readonly] 
**view_count** | **str** | Output only. The total number of views that all the published images in this PhotoSequence have received. | [optional] [readonly] 

## Example

```python
from openapi_client.models.photo_sequence import PhotoSequence

# TODO update the JSON string below
json = "{}"
# create an instance of PhotoSequence from a JSON string
photo_sequence_instance = PhotoSequence.from_json(json)
# print the JSON string representation of the object
print(PhotoSequence.to_json())

# convert the object into a dict
photo_sequence_dict = photo_sequence_instance.to_dict()
# create an instance of PhotoSequence from a dict
photo_sequence_from_dict = PhotoSequence.from_dict(photo_sequence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


