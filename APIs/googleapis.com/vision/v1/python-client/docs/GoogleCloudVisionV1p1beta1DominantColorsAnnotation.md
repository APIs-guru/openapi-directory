# GoogleCloudVisionV1p1beta1DominantColorsAnnotation

Set of dominant colors and their corresponding scores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colors** | [**List[GoogleCloudVisionV1p1beta1ColorInfo]**](GoogleCloudVisionV1p1beta1ColorInfo.md) | RGB color values with their score and pixel fraction. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_dominant_colors_annotation import GoogleCloudVisionV1p1beta1DominantColorsAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1DominantColorsAnnotation from a JSON string
google_cloud_vision_v1p1beta1_dominant_colors_annotation_instance = GoogleCloudVisionV1p1beta1DominantColorsAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1DominantColorsAnnotation.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_dominant_colors_annotation_dict = google_cloud_vision_v1p1beta1_dominant_colors_annotation_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1DominantColorsAnnotation from a dict
google_cloud_vision_v1p1beta1_dominant_colors_annotation_from_dict = GoogleCloudVisionV1p1beta1DominantColorsAnnotation.from_dict(google_cloud_vision_v1p1beta1_dominant_colors_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


