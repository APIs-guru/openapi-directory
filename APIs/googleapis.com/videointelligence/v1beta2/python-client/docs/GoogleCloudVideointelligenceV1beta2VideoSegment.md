# GoogleCloudVideointelligenceV1beta2VideoSegment

Video segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_offset** | **str** | Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive). | [optional] 
**start_time_offset** | **str** | Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_video_segment import GoogleCloudVideointelligenceV1beta2VideoSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2VideoSegment from a JSON string
google_cloud_videointelligence_v1beta2_video_segment_instance = GoogleCloudVideointelligenceV1beta2VideoSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2VideoSegment.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_video_segment_dict = google_cloud_videointelligence_v1beta2_video_segment_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2VideoSegment from a dict
google_cloud_videointelligence_v1beta2_video_segment_from_dict = GoogleCloudVideointelligenceV1beta2VideoSegment.from_dict(google_cloud_videointelligence_v1beta2_video_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


