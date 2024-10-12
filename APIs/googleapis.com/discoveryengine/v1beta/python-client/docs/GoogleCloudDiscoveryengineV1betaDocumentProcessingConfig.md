# GoogleCloudDiscoveryengineV1betaDocumentProcessingConfig

A singleton resource of DataStore. It's empty when DataStore is created, which defaults to digital parser. The first call to DataStoreService.UpdateDocumentProcessingConfig method will initialize the config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_parsing_config** | [**GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig**](GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig.md) |  | [optional] 
**name** | **str** | The full resource name of the Document Processing Config. Format: &#x60;projects/*/locations/*/collections/*/dataStores/*/documentProcessingConfig&#x60;. | [optional] 
**parsing_config_overrides** | [**Dict[str, GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig]**](GoogleCloudDiscoveryengineV1betaDocumentProcessingConfigParsingConfig.md) | Map from file type to override the default parsing configuration based on the file type. Supported keys: * &#x60;pdf&#x60;: Override parsing config for PDF files, either digital parsing, ocr parsing or layout parsing is supported. * &#x60;html&#x60;: Override parsing config for HTML files, only digital parsing and or layout parsing are supported. * &#x60;docx&#x60;: Override parsing config for DOCX files, only digital parsing and or layout parsing are supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_document_processing_config import GoogleCloudDiscoveryengineV1betaDocumentProcessingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaDocumentProcessingConfig from a JSON string
google_cloud_discoveryengine_v1beta_document_processing_config_instance = GoogleCloudDiscoveryengineV1betaDocumentProcessingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaDocumentProcessingConfig.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_document_processing_config_dict = google_cloud_discoveryengine_v1beta_document_processing_config_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaDocumentProcessingConfig from a dict
google_cloud_discoveryengine_v1beta_document_processing_config_from_dict = GoogleCloudDiscoveryengineV1betaDocumentProcessingConfig.from_dict(google_cloud_discoveryengine_v1beta_document_processing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


