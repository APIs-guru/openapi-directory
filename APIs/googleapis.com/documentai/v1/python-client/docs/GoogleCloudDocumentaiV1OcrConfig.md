# GoogleCloudDocumentaiV1OcrConfig

Config for Document OCR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_ocr_options** | **List[str]** | A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - &#x60;legacy_layout&#x60;: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation. | [optional] 
**compute_style_info** | **bool** | Turn on font identification model and return font style information. Deprecated, use PremiumFeatures.compute_style_info instead. | [optional] 
**disable_character_boxes_detection** | **bool** | Turn off character box detector in OCR engine. Character box detection is enabled by default in OCR 2.0 (and later) processors. | [optional] 
**enable_image_quality_scores** | **bool** | Enables intelligent document quality scores after OCR. Can help with diagnosing why OCR responses are of poor quality for a given input. Adds additional latency comparable to regular OCR to the process call. | [optional] 
**enable_native_pdf_parsing** | **bool** | Enables special handling for PDFs with existing text information. Results in better text extraction quality in such PDF inputs. | [optional] 
**enable_symbol** | **bool** | Includes symbol level OCR information if set to true. | [optional] 
**hints** | [**GoogleCloudDocumentaiV1OcrConfigHints**](GoogleCloudDocumentaiV1OcrConfigHints.md) |  | [optional] 
**premium_features** | [**GoogleCloudDocumentaiV1OcrConfigPremiumFeatures**](GoogleCloudDocumentaiV1OcrConfigPremiumFeatures.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_ocr_config import GoogleCloudDocumentaiV1OcrConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1OcrConfig from a JSON string
google_cloud_documentai_v1_ocr_config_instance = GoogleCloudDocumentaiV1OcrConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1OcrConfig.to_json())

# convert the object into a dict
google_cloud_documentai_v1_ocr_config_dict = google_cloud_documentai_v1_ocr_config_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1OcrConfig from a dict
google_cloud_documentai_v1_ocr_config_from_dict = GoogleCloudDocumentaiV1OcrConfig.from_dict(google_cloud_documentai_v1_ocr_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


