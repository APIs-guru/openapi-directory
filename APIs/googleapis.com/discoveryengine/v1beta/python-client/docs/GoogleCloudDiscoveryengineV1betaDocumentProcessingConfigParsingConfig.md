# GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig

Related configurations applied to a specific type of document parser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digital_parsing_config** | **object** | The digital parsing configurations for documents. | [optional] 
**ocr_parsing_config** | [**GoogleCloudDiscoveryengineV1betaOcrParsingConfig**](GoogleCloudDiscoveryengineV1betaOcrParsingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_document_processing_config_parsing_config import GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig from a JSON string
google_cloud_discoveryengine_v1beta_document_processing_config_parsing_config_instance = GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_document_processing_config_parsing_config_dict = google_cloud_discoveryengine_v1beta_document_processing_config_parsing_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig from a dict
google_cloud_discoveryengine_v1beta_document_processing_config_parsing_config_from_dict = GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig.from_dict(google_cloud_discoveryengine_v1beta_document_processing_config_parsing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


