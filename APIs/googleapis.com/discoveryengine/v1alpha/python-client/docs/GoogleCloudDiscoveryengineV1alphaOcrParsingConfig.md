# GoogleCloudDiscoveryengineV1alphaOcrParsingConfig

The OCR parsing configurations for documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enhanced_document_elements** | **List[str]** | Apply additional enhanced OCR processing to a list of document elements. Supported values: * &#x60;table&#x60;: advanced table parsing model. | [optional] 
**use_native_text** | **bool** | If true, will use native text instead of OCR text on pages containing native text. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_ocr_parsing_config import GoogleCloudDiscoveryengineV1alphaOcrParsingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaOcrParsingConfig from a JSON string
google_cloud_discoveryengine_v1alpha_ocr_parsing_config_instance = GoogleCloudDiscoveryengineV1alphaOcrParsingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaOcrParsingConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_ocr_parsing_config_dict = google_cloud_discoveryengine_v1alpha_ocr_parsing_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaOcrParsingConfig from a dict
google_cloud_discoveryengine_v1alpha_ocr_parsing_config_from_dict = GoogleCloudDiscoveryengineV1alphaOcrParsingConfig.from_dict(google_cloud_discoveryengine_v1alpha_ocr_parsing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


