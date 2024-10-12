# GoogleCloudVisionV1p1beta1CropHintsAnnotation

Set of crop hints that are used to generate new crops when serving images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crop_hints** | [**List[GoogleCloudVisionV1p1beta1CropHint]**](GoogleCloudVisionV1p1beta1CropHint.md) | Crop hint results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_crop_hints_annotation import GoogleCloudVisionV1p1beta1CropHintsAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1CropHintsAnnotation from a JSON string
google_cloud_vision_v1p1beta1_crop_hints_annotation_instance = GoogleCloudVisionV1p1beta1CropHintsAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1CropHintsAnnotation.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_crop_hints_annotation_dict = google_cloud_vision_v1p1beta1_crop_hints_annotation_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1CropHintsAnnotation from a dict
google_cloud_vision_v1p1beta1_crop_hints_annotation_from_dict = GoogleCloudVisionV1p1beta1CropHintsAnnotation.from_dict(google_cloud_vision_v1p1beta1_crop_hints_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


