# GoogleCloudVisionV1p3beta1ImageAnnotationContext

If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_number** | **int** | If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image. | [optional] 
**uri** | **str** | The URI of the file used to produce the image. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p3beta1_image_annotation_context import GoogleCloudVisionV1p3beta1ImageAnnotationContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p3beta1ImageAnnotationContext from a JSON string
google_cloud_vision_v1p3beta1_image_annotation_context_instance = GoogleCloudVisionV1p3beta1ImageAnnotationContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p3beta1ImageAnnotationContext.to_json())

# convert the object into a dict
google_cloud_vision_v1p3beta1_image_annotation_context_dict = google_cloud_vision_v1p3beta1_image_annotation_context_instance.to_dict()
# create an instance of GoogleCloudVisionV1p3beta1ImageAnnotationContext from a dict
google_cloud_vision_v1p3beta1_image_annotation_context_from_dict = GoogleCloudVisionV1p3beta1ImageAnnotationContext.from_dict(google_cloud_vision_v1p3beta1_image_annotation_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


