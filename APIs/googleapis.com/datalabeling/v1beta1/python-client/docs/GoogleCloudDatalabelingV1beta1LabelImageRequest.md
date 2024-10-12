# GoogleCloudDatalabelingV1beta1LabelImageRequest

Request message for starting an image labeling task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_config** | [**GoogleCloudDatalabelingV1beta1HumanAnnotationConfig**](GoogleCloudDatalabelingV1beta1HumanAnnotationConfig.md) |  | [optional] 
**bounding_poly_config** | [**GoogleCloudDatalabelingV1beta1BoundingPolyConfig**](GoogleCloudDatalabelingV1beta1BoundingPolyConfig.md) |  | [optional] 
**feature** | **str** | Required. The type of image labeling task. | [optional] 
**image_classification_config** | [**GoogleCloudDatalabelingV1beta1ImageClassificationConfig**](GoogleCloudDatalabelingV1beta1ImageClassificationConfig.md) |  | [optional] 
**polyline_config** | [**GoogleCloudDatalabelingV1beta1PolylineConfig**](GoogleCloudDatalabelingV1beta1PolylineConfig.md) |  | [optional] 
**segmentation_config** | [**GoogleCloudDatalabelingV1beta1SegmentationConfig**](GoogleCloudDatalabelingV1beta1SegmentationConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_label_image_request import GoogleCloudDatalabelingV1beta1LabelImageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1LabelImageRequest from a JSON string
google_cloud_datalabeling_v1beta1_label_image_request_instance = GoogleCloudDatalabelingV1beta1LabelImageRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1LabelImageRequest.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_label_image_request_dict = google_cloud_datalabeling_v1beta1_label_image_request_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1LabelImageRequest from a dict
google_cloud_datalabeling_v1beta1_label_image_request_from_dict = GoogleCloudDatalabelingV1beta1LabelImageRequest.from_dict(google_cloud_datalabeling_v1beta1_label_image_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


