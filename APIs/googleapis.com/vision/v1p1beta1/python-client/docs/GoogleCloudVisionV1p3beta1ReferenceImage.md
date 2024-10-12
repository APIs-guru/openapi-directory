# GoogleCloudVisionV1p3beta1ReferenceImage

A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_polys** | [**List[GoogleCloudVisionV1p3beta1BoundingPoly]**](GoogleCloudVisionV1p3beta1BoundingPoly.md) | Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not). | [optional] 
**name** | **str** | The resource name of the reference image. Format is: &#x60;projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID&#x60;. This field is ignored when creating a reference image. | [optional] 
**uri** | **str** | Required. The Google Cloud Storage URI of the reference image. The URI must start with &#x60;gs://&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p3beta1_reference_image import GoogleCloudVisionV1p3beta1ReferenceImage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p3beta1ReferenceImage from a JSON string
google_cloud_vision_v1p3beta1_reference_image_instance = GoogleCloudVisionV1p3beta1ReferenceImage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p3beta1ReferenceImage.to_json())

# convert the object into a dict
google_cloud_vision_v1p3beta1_reference_image_dict = google_cloud_vision_v1p3beta1_reference_image_instance.to_dict()
# create an instance of GoogleCloudVisionV1p3beta1ReferenceImage from a dict
google_cloud_vision_v1p3beta1_reference_image_from_dict = GoogleCloudVisionV1p3beta1ReferenceImage.from_dict(google_cloud_vision_v1p3beta1_reference_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


