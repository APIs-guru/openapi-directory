# ImageContext

Image context and/or feature-specific parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crop_hints_params** | [**CropHintsParams**](CropHintsParams.md) |  | [optional] 
**language_hints** | **List[str]** | List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting &#x60;language_hints&#x60; is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages). | [optional] 
**lat_long_rect** | [**LatLongRect**](LatLongRect.md) |  | [optional] 
**product_search_params** | [**ProductSearchParams**](ProductSearchParams.md) |  | [optional] 
**text_detection_params** | [**TextDetectionParams**](TextDetectionParams.md) |  | [optional] 
**web_detection_params** | [**WebDetectionParams**](WebDetectionParams.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_context import ImageContext

# TODO update the JSON string below
json = "{}"
# create an instance of ImageContext from a JSON string
image_context_instance = ImageContext.from_json(json)
# print the JSON string representation of the object
print(ImageContext.to_json())

# convert the object into a dict
image_context_dict = image_context_instance.to_dict()
# create an instance of ImageContext from a dict
image_context_from_dict = ImageContext.from_dict(image_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


