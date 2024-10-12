# GoogleCloudDatalabelingV1beta1ObjectTrackingFrame

Video frame level annotation for object detection and tracking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly** | [**GoogleCloudDatalabelingV1beta1BoundingPoly**](GoogleCloudDatalabelingV1beta1BoundingPoly.md) |  | [optional] 
**normalized_bounding_poly** | [**GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly**](GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly.md) |  | [optional] 
**time_offset** | **str** | The time offset of this frame relative to the beginning of the video. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_object_tracking_frame import GoogleCloudDatalabelingV1beta1ObjectTrackingFrame

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ObjectTrackingFrame from a JSON string
google_cloud_datalabeling_v1beta1_object_tracking_frame_instance = GoogleCloudDatalabelingV1beta1ObjectTrackingFrame.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ObjectTrackingFrame.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_object_tracking_frame_dict = google_cloud_datalabeling_v1beta1_object_tracking_frame_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ObjectTrackingFrame from a dict
google_cloud_datalabeling_v1beta1_object_tracking_frame_from_dict = GoogleCloudDatalabelingV1beta1ObjectTrackingFrame.from_dict(google_cloud_datalabeling_v1beta1_object_tracking_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


