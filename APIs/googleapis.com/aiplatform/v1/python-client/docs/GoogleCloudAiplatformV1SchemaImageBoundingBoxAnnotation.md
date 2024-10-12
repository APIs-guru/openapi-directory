# GoogleCloudAiplatformV1SchemaImageBoundingBoxAnnotation

Annotation details specific to image object detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id** | **str** | The resource Id of the AnnotationSpec that this Annotation pertains to. | [optional] 
**display_name** | **str** | The display name of the AnnotationSpec that this Annotation pertains to. | [optional] 
**x_max** | **float** | The rightmost coordinate of the bounding box. | [optional] 
**x_min** | **float** | The leftmost coordinate of the bounding box. | [optional] 
**y_max** | **float** | The bottommost coordinate of the bounding box. | [optional] 
**y_min** | **float** | The topmost coordinate of the bounding box. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_image_bounding_box_annotation import GoogleCloudAiplatformV1SchemaImageBoundingBoxAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaImageBoundingBoxAnnotation from a JSON string
google_cloud_aiplatform_v1_schema_image_bounding_box_annotation_instance = GoogleCloudAiplatformV1SchemaImageBoundingBoxAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaImageBoundingBoxAnnotation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_image_bounding_box_annotation_dict = google_cloud_aiplatform_v1_schema_image_bounding_box_annotation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaImageBoundingBoxAnnotation from a dict
google_cloud_aiplatform_v1_schema_image_bounding_box_annotation_from_dict = GoogleCloudAiplatformV1SchemaImageBoundingBoxAnnotation.from_dict(google_cloud_aiplatform_v1_schema_image_bounding_box_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


