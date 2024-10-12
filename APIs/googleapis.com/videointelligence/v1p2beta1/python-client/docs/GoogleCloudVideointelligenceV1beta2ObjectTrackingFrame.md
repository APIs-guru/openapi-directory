# GoogleCloudVideointelligenceV1beta2ObjectTrackingFrame

Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**normalized_bounding_box** | [**GoogleCloudVideointelligenceV1beta2NormalizedBoundingBox**](GoogleCloudVideointelligenceV1beta2NormalizedBoundingBox.md) |  | [optional] 
**time_offset** | **str** | The timestamp of the frame in microseconds. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_object_tracking_frame import GoogleCloudVideointelligenceV1beta2ObjectTrackingFrame

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2ObjectTrackingFrame from a JSON string
google_cloud_videointelligence_v1beta2_object_tracking_frame_instance = GoogleCloudVideointelligenceV1beta2ObjectTrackingFrame.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2ObjectTrackingFrame.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_object_tracking_frame_dict = google_cloud_videointelligence_v1beta2_object_tracking_frame_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2ObjectTrackingFrame from a dict
google_cloud_videointelligence_v1beta2_object_tracking_frame_from_dict = GoogleCloudVideointelligenceV1beta2ObjectTrackingFrame.from_dict(google_cloud_videointelligence_v1beta2_object_tracking_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


