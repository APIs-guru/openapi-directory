# GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics

Metrics calculated for an image object detection (bounding box) model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pr_curve** | [**GoogleCloudDatalabelingV1beta1PrCurve**](GoogleCloudDatalabelingV1beta1PrCurve.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_object_detection_metrics import GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics from a JSON string
google_cloud_datalabeling_v1beta1_object_detection_metrics_instance = GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_object_detection_metrics_dict = google_cloud_datalabeling_v1beta1_object_detection_metrics_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics from a dict
google_cloud_datalabeling_v1beta1_object_detection_metrics_from_dict = GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics.from_dict(google_cloud_datalabeling_v1beta1_object_detection_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


