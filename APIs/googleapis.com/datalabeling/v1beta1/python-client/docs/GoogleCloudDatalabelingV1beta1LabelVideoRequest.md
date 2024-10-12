# GoogleCloudDatalabelingV1beta1LabelVideoRequest

Request message for LabelVideo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_config** | [**GoogleCloudDatalabelingV1beta1HumanAnnotationConfig**](GoogleCloudDatalabelingV1beta1HumanAnnotationConfig.md) |  | [optional] 
**event_config** | [**GoogleCloudDatalabelingV1beta1EventConfig**](GoogleCloudDatalabelingV1beta1EventConfig.md) |  | [optional] 
**feature** | **str** | Required. The type of video labeling task. | [optional] 
**object_detection_config** | [**GoogleCloudDatalabelingV1beta1ObjectDetectionConfig**](GoogleCloudDatalabelingV1beta1ObjectDetectionConfig.md) |  | [optional] 
**object_tracking_config** | [**GoogleCloudDatalabelingV1beta1ObjectTrackingConfig**](GoogleCloudDatalabelingV1beta1ObjectTrackingConfig.md) |  | [optional] 
**video_classification_config** | [**GoogleCloudDatalabelingV1beta1VideoClassificationConfig**](GoogleCloudDatalabelingV1beta1VideoClassificationConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_label_video_request import GoogleCloudDatalabelingV1beta1LabelVideoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1LabelVideoRequest from a JSON string
google_cloud_datalabeling_v1beta1_label_video_request_instance = GoogleCloudDatalabelingV1beta1LabelVideoRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1LabelVideoRequest.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_label_video_request_dict = google_cloud_datalabeling_v1beta1_label_video_request_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1LabelVideoRequest from a dict
google_cloud_datalabeling_v1beta1_label_video_request_from_dict = GoogleCloudDatalabelingV1beta1LabelVideoRequest.from_dict(google_cloud_datalabeling_v1beta1_label_video_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


