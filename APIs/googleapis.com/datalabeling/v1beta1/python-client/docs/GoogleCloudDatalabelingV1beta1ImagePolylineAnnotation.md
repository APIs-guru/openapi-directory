# GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation

A polyline for the image annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec** | [**GoogleCloudDatalabelingV1beta1AnnotationSpec**](GoogleCloudDatalabelingV1beta1AnnotationSpec.md) |  | [optional] 
**normalized_polyline** | [**GoogleCloudDatalabelingV1beta1NormalizedPolyline**](GoogleCloudDatalabelingV1beta1NormalizedPolyline.md) |  | [optional] 
**polyline** | [**GoogleCloudDatalabelingV1beta1Polyline**](GoogleCloudDatalabelingV1beta1Polyline.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_image_polyline_annotation import GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation from a JSON string
google_cloud_datalabeling_v1beta1_image_polyline_annotation_instance = GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_image_polyline_annotation_dict = google_cloud_datalabeling_v1beta1_image_polyline_annotation_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation from a dict
google_cloud_datalabeling_v1beta1_image_polyline_annotation_from_dict = GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation.from_dict(google_cloud_datalabeling_v1beta1_image_polyline_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


