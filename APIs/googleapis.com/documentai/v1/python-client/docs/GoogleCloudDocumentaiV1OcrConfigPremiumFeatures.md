# GoogleCloudDocumentaiV1OcrConfigPremiumFeatures

Configurations for premium OCR features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_style_info** | **bool** | Turn on font identification model and return font style information. | [optional] 
**enable_math_ocr** | **bool** | Turn on the model that can extract LaTeX math formulas. | [optional] 
**enable_selection_mark_detection** | **bool** | Turn on selection mark detector in OCR engine. Only available in OCR 2.0 (and later) processors. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_ocr_config_premium_features import GoogleCloudDocumentaiV1OcrConfigPremiumFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1OcrConfigPremiumFeatures from a JSON string
google_cloud_documentai_v1_ocr_config_premium_features_instance = GoogleCloudDocumentaiV1OcrConfigPremiumFeatures.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1OcrConfigPremiumFeatures.to_json())

# convert the object into a dict
google_cloud_documentai_v1_ocr_config_premium_features_dict = google_cloud_documentai_v1_ocr_config_premium_features_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1OcrConfigPremiumFeatures from a dict
google_cloud_documentai_v1_ocr_config_premium_features_from_dict = GoogleCloudDocumentaiV1OcrConfigPremiumFeatures.from_dict(google_cloud_documentai_v1_ocr_config_premium_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


