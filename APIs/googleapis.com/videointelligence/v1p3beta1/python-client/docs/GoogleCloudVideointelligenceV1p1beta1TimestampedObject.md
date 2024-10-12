# GoogleCloudVideointelligenceV1p1beta1TimestampedObject

For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[GoogleCloudVideointelligenceV1p1beta1DetectedAttribute]**](GoogleCloudVideointelligenceV1p1beta1DetectedAttribute.md) | Optional. The attributes of the object in the bounding box. | [optional] 
**landmarks** | [**List[GoogleCloudVideointelligenceV1p1beta1DetectedLandmark]**](GoogleCloudVideointelligenceV1p1beta1DetectedLandmark.md) | Optional. The detected landmarks. | [optional] 
**normalized_bounding_box** | [**GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingBox**](GoogleCloudVideointelligenceV1p1beta1NormalizedBoundingBox.md) |  | [optional] 
**time_offset** | **str** | Time-offset, relative to the beginning of the video, corresponding to the video frame for this object. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p1beta1_timestamped_object import GoogleCloudVideointelligenceV1p1beta1TimestampedObject

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p1beta1TimestampedObject from a JSON string
google_cloud_videointelligence_v1p1beta1_timestamped_object_instance = GoogleCloudVideointelligenceV1p1beta1TimestampedObject.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p1beta1TimestampedObject.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p1beta1_timestamped_object_dict = google_cloud_videointelligence_v1p1beta1_timestamped_object_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p1beta1TimestampedObject from a dict
google_cloud_videointelligence_v1p1beta1_timestamped_object_from_dict = GoogleCloudVideointelligenceV1p1beta1TimestampedObject.from_dict(google_cloud_videointelligence_v1p1beta1_timestamped_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


