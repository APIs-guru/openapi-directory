# GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation

Image segmentation annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_colors** | [**Dict[str, GoogleCloudDatalabelingV1beta1AnnotationSpec]**](GoogleCloudDatalabelingV1beta1AnnotationSpec.md) | The mapping between rgb color and annotation spec. The key is the rgb color represented in format of rgb(0, 0, 0). The value is the AnnotationSpec. | [optional] 
**image_bytes** | **bytearray** | A byte string of a full image&#39;s color map. | [optional] 
**mime_type** | **str** | Image format. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_image_segmentation_annotation import GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation from a JSON string
google_cloud_datalabeling_v1beta1_image_segmentation_annotation_instance = GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_image_segmentation_annotation_dict = google_cloud_datalabeling_v1beta1_image_segmentation_annotation_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation from a dict
google_cloud_datalabeling_v1beta1_image_segmentation_annotation_from_dict = GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation.from_dict(google_cloud_datalabeling_v1beta1_image_segmentation_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


