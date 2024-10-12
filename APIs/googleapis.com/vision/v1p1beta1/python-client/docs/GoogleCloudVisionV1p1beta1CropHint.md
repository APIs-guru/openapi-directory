# GoogleCloudVisionV1p1beta1CropHint

Single crop hint that is used to generate a new crop when serving an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly** | [**GoogleCloudVisionV1p1beta1BoundingPoly**](GoogleCloudVisionV1p1beta1BoundingPoly.md) |  | [optional] 
**confidence** | **float** | Confidence of this being a salient region. Range [0, 1]. | [optional] 
**importance_fraction** | **float** | Fraction of importance of this salient region with respect to the original image. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_crop_hint import GoogleCloudVisionV1p1beta1CropHint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1CropHint from a JSON string
google_cloud_vision_v1p1beta1_crop_hint_instance = GoogleCloudVisionV1p1beta1CropHint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1CropHint.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_crop_hint_dict = google_cloud_vision_v1p1beta1_crop_hint_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1CropHint from a dict
google_cloud_vision_v1p1beta1_crop_hint_from_dict = GoogleCloudVisionV1p1beta1CropHint.from_dict(google_cloud_vision_v1p1beta1_crop_hint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


