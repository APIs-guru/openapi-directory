# GoogleCloudVisionV1p1beta1ImageContext

Image context and/or feature-specific parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crop_hints_params** | [**GoogleCloudVisionV1p1beta1CropHintsParams**](GoogleCloudVisionV1p1beta1CropHintsParams.md) |  | [optional] 
**language_hints** | **List[str]** | List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting &#x60;language_hints&#x60; is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages). | [optional] 
**lat_long_rect** | [**GoogleCloudVisionV1p1beta1LatLongRect**](GoogleCloudVisionV1p1beta1LatLongRect.md) |  | [optional] 
**product_search_params** | [**GoogleCloudVisionV1p1beta1ProductSearchParams**](GoogleCloudVisionV1p1beta1ProductSearchParams.md) |  | [optional] 
**text_detection_params** | [**GoogleCloudVisionV1p1beta1TextDetectionParams**](GoogleCloudVisionV1p1beta1TextDetectionParams.md) |  | [optional] 
**web_detection_params** | [**GoogleCloudVisionV1p1beta1WebDetectionParams**](GoogleCloudVisionV1p1beta1WebDetectionParams.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_image_context import GoogleCloudVisionV1p1beta1ImageContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1ImageContext from a JSON string
google_cloud_vision_v1p1beta1_image_context_instance = GoogleCloudVisionV1p1beta1ImageContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1ImageContext.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_image_context_dict = google_cloud_vision_v1p1beta1_image_context_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1ImageContext from a dict
google_cloud_vision_v1p1beta1_image_context_from_dict = GoogleCloudVisionV1p1beta1ImageContext.from_dict(google_cloud_vision_v1p1beta1_image_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


