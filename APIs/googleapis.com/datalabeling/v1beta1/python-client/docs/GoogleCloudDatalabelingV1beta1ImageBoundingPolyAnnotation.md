# GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation

Image bounding poly annotation. It represents a polygon including bounding box in the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec** | [**GoogleCloudDatalabelingV1beta1AnnotationSpec**](GoogleCloudDatalabelingV1beta1AnnotationSpec.md) |  | [optional] 
**bounding_poly** | [**GoogleCloudDatalabelingV1beta1BoundingPoly**](GoogleCloudDatalabelingV1beta1BoundingPoly.md) |  | [optional] 
**normalized_bounding_poly** | [**GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly**](GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_image_bounding_poly_annotation import GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation from a JSON string
google_cloud_datalabeling_v1beta1_image_bounding_poly_annotation_instance = GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_image_bounding_poly_annotation_dict = google_cloud_datalabeling_v1beta1_image_bounding_poly_annotation_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation from a dict
google_cloud_datalabeling_v1beta1_image_bounding_poly_annotation_from_dict = GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation.from_dict(google_cloud_datalabeling_v1beta1_image_bounding_poly_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


