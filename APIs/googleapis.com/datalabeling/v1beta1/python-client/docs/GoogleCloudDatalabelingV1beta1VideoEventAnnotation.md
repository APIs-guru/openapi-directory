# GoogleCloudDatalabelingV1beta1VideoEventAnnotation

Video event annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec** | [**GoogleCloudDatalabelingV1beta1AnnotationSpec**](GoogleCloudDatalabelingV1beta1AnnotationSpec.md) |  | [optional] 
**time_segment** | [**GoogleCloudDatalabelingV1beta1TimeSegment**](GoogleCloudDatalabelingV1beta1TimeSegment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_video_event_annotation import GoogleCloudDatalabelingV1beta1VideoEventAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1VideoEventAnnotation from a JSON string
google_cloud_datalabeling_v1beta1_video_event_annotation_instance = GoogleCloudDatalabelingV1beta1VideoEventAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1VideoEventAnnotation.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_video_event_annotation_dict = google_cloud_datalabeling_v1beta1_video_event_annotation_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1VideoEventAnnotation from a dict
google_cloud_datalabeling_v1beta1_video_event_annotation_from_dict = GoogleCloudDatalabelingV1beta1VideoEventAnnotation.from_dict(google_cloud_datalabeling_v1beta1_video_event_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


