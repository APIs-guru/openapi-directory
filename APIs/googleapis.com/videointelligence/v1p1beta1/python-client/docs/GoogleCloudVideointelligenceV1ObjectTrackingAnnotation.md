# GoogleCloudVideointelligenceV1ObjectTrackingAnnotation

Annotations corresponding to one tracked object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Object category&#39;s labeling confidence of this track. | [optional] 
**entity** | [**GoogleCloudVideointelligenceV1Entity**](GoogleCloudVideointelligenceV1Entity.md) |  | [optional] 
**frames** | [**List[GoogleCloudVideointelligenceV1ObjectTrackingFrame]**](GoogleCloudVideointelligenceV1ObjectTrackingFrame.md) | Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames. | [optional] 
**segment** | [**GoogleCloudVideointelligenceV1VideoSegment**](GoogleCloudVideointelligenceV1VideoSegment.md) |  | [optional] 
**track_id** | **str** | Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time. | [optional] 
**version** | **str** | Feature version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1_object_tracking_annotation import GoogleCloudVideointelligenceV1ObjectTrackingAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1ObjectTrackingAnnotation from a JSON string
google_cloud_videointelligence_v1_object_tracking_annotation_instance = GoogleCloudVideointelligenceV1ObjectTrackingAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1ObjectTrackingAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1_object_tracking_annotation_dict = google_cloud_videointelligence_v1_object_tracking_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1ObjectTrackingAnnotation from a dict
google_cloud_videointelligence_v1_object_tracking_annotation_from_dict = GoogleCloudVideointelligenceV1ObjectTrackingAnnotation.from_dict(google_cloud_videointelligence_v1_object_tracking_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


