# GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource

The inline source for the input config for ImportDocuments method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[GoogleCloudDiscoveryengineV1alphaDocument]**](GoogleCloudDiscoveryengineV1alphaDocument.md) | Required. A list of documents to update/create. Each document must have a valid Document.id. Recommended max of 100 items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_import_documents_request_inline_source import GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource from a JSON string
google_cloud_discoveryengine_v1alpha_import_documents_request_inline_source_instance = GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_import_documents_request_inline_source_dict = google_cloud_discoveryengine_v1alpha_import_documents_request_inline_source_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource from a dict
google_cloud_discoveryengine_v1alpha_import_documents_request_inline_source_from_dict = GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource.from_dict(google_cloud_discoveryengine_v1alpha_import_documents_request_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


