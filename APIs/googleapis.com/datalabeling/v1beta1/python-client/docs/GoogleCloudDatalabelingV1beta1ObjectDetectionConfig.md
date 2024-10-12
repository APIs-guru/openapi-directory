# GoogleCloudDatalabelingV1beta1ObjectDetectionConfig

Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_set** | **str** | Required. Annotation spec set resource name. | [optional] 
**extraction_frame_rate** | **float** | Required. Number of frames per second to be extracted from the video. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_object_detection_config import GoogleCloudDatalabelingV1beta1ObjectDetectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ObjectDetectionConfig from a JSON string
google_cloud_datalabeling_v1beta1_object_detection_config_instance = GoogleCloudDatalabelingV1beta1ObjectDetectionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ObjectDetectionConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_object_detection_config_dict = google_cloud_datalabeling_v1beta1_object_detection_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ObjectDetectionConfig from a dict
google_cloud_datalabeling_v1beta1_object_detection_config_from_dict = GoogleCloudDatalabelingV1beta1ObjectDetectionConfig.from_dict(google_cloud_datalabeling_v1beta1_object_detection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


