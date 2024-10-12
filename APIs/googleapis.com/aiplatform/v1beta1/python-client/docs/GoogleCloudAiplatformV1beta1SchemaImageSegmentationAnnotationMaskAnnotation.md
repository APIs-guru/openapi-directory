# GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationMaskAnnotation

The mask based segmentation annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_colors** | [**List[GoogleCloudAiplatformV1beta1SchemaAnnotationSpecColor]**](GoogleCloudAiplatformV1beta1SchemaAnnotationSpecColor.md) | The mapping between color and AnnotationSpec for this Annotation. | [optional] 
**mask_gcs_uri** | **str** | Google Cloud Storage URI that points to the mask image. The image must be in PNG format. It must have the same size as the DataItem&#39;s image. Each pixel in the image mask represents the AnnotationSpec which the pixel in the image DataItem belong to. Each color is mapped to one AnnotationSpec based on annotation_spec_colors. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation_mask_annotation import GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationMaskAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationMaskAnnotation from a JSON string
google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation_mask_annotation_instance = GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationMaskAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationMaskAnnotation.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation_mask_annotation_dict = google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation_mask_annotation_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationMaskAnnotation from a dict
google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation_mask_annotation_from_dict = GoogleCloudAiplatformV1beta1SchemaImageSegmentationAnnotationMaskAnnotation.from_dict(google_cloud_aiplatform_v1beta1_schema_image_segmentation_annotation_mask_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


