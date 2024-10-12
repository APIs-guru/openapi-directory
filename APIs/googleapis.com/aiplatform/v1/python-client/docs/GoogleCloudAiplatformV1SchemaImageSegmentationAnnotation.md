# GoogleCloudAiplatformV1SchemaImageSegmentationAnnotation

Annotation details specific to image segmentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mask_annotation** | [**GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationMaskAnnotation**](GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationMaskAnnotation.md) |  | [optional] 
**polygon_annotation** | [**GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationPolygonAnnotation**](GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationPolygonAnnotation.md) |  | [optional] 
**polyline_annotation** | [**GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationPolylineAnnotation**](GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationPolylineAnnotation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_image_segmentation_annotation import GoogleCloudAiplatformV1SchemaImageSegmentationAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaImageSegmentationAnnotation from a JSON string
google_cloud_aiplatform_v1_schema_image_segmentation_annotation_instance = GoogleCloudAiplatformV1SchemaImageSegmentationAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaImageSegmentationAnnotation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_image_segmentation_annotation_dict = google_cloud_aiplatform_v1_schema_image_segmentation_annotation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaImageSegmentationAnnotation from a dict
google_cloud_aiplatform_v1_schema_image_segmentation_annotation_from_dict = GoogleCloudAiplatformV1SchemaImageSegmentationAnnotation.from_dict(google_cloud_aiplatform_v1_schema_image_segmentation_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


