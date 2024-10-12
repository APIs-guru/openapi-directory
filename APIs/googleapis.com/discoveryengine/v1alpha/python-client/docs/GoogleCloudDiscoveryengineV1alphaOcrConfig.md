# GoogleCloudDiscoveryengineV1alphaOcrConfig

The OCR options for parsing documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Required. If OCR is enabled or not. OCR must be enabled for other OcrConfig options to apply. We will only perform OCR on the first 80 pages of the PDF files. | [optional] 
**enhanced_document_elements** | **List[str]** | Apply additional enhanced OCR processing to a list of document elements. Supported values: * &#x60;table&#x60;: advanced table parsing model. | [optional] 
**use_native_text** | **bool** | If true, will use native text instead of OCR text on pages containing native text. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_ocr_config import GoogleCloudDiscoveryengineV1alphaOcrConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaOcrConfig from a JSON string
google_cloud_discoveryengine_v1alpha_ocr_config_instance = GoogleCloudDiscoveryengineV1alphaOcrConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaOcrConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_ocr_config_dict = google_cloud_discoveryengine_v1alpha_ocr_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaOcrConfig from a dict
google_cloud_discoveryengine_v1alpha_ocr_config_from_dict = GoogleCloudDiscoveryengineV1alphaOcrConfig.from_dict(google_cloud_discoveryengine_v1alpha_ocr_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


