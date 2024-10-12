# GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationPolygonAnnotation

Represents a polygon in image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id** | **str** | The resource Id of the AnnotationSpec that this Annotation pertains to. | [optional] 
**display_name** | **str** | The display name of the AnnotationSpec that this Annotation pertains to. | [optional] 
**vertexes** | [**List[GoogleCloudAiplatformV1SchemaVertex]**](GoogleCloudAiplatformV1SchemaVertex.md) | The vertexes are connected one by one and the last vertex is connected to the first one to represent a polygon. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_image_segmentation_annotation_polygon_annotation import GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationPolygonAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationPolygonAnnotation from a JSON string
google_cloud_aiplatform_v1_schema_image_segmentation_annotation_polygon_annotation_instance = GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationPolygonAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationPolygonAnnotation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_image_segmentation_annotation_polygon_annotation_dict = google_cloud_aiplatform_v1_schema_image_segmentation_annotation_polygon_annotation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationPolygonAnnotation from a dict
google_cloud_aiplatform_v1_schema_image_segmentation_annotation_polygon_annotation_from_dict = GoogleCloudAiplatformV1SchemaImageSegmentationAnnotationPolygonAnnotation.from_dict(google_cloud_aiplatform_v1_schema_image_segmentation_annotation_polygon_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


