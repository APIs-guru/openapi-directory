# GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotation

Annotation details specific to image segmentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mask_annotation** | [**GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationMaskAnnotation**](GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationMaskAnnotation.md) |  | [optional] 
**polygon_annotation** | [**GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationPolygonAnnotation**](GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationPolygonAnnotation.md) |  | [optional] 
**polyline_annotation** | [**GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationPolylineAnnotation**](GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationPolylineAnnotation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation import GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotation from a JSON string
google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation_instance = GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation_dict = google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotation from a dict
google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation_from_dict = GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotation.from_dict(google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


