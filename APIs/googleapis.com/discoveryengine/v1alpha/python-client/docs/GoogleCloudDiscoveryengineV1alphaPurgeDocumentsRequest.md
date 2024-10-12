# GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest

Request message for DocumentService.PurgeDocuments method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_config** | [**GoogleCloudDiscoveryengineV1alphaPurgeErrorConfig**](GoogleCloudDiscoveryengineV1alphaPurgeErrorConfig.md) |  | [optional] 
**filter** | **str** | Required. Filter matching documents to purge. Only currently supported value is &#x60;*&#x60; (all items). | [optional] 
**force** | **bool** | Actually performs the purge. If &#x60;force&#x60; is set to false, return the expected purge count without deleting any documents. | [optional] 
**gcs_source** | [**GoogleCloudDiscoveryengineV1alphaGcsSource**](GoogleCloudDiscoveryengineV1alphaGcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_purge_documents_request import GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest from a JSON string
google_cloud_discoveryengine_v1alpha_purge_documents_request_instance = GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_purge_documents_request_dict = google_cloud_discoveryengine_v1alpha_purge_documents_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest from a dict
google_cloud_discoveryengine_v1alpha_purge_documents_request_from_dict = GoogleCloudDiscoveryengineV1alphaPurgeDocumentsRequest.from_dict(google_cloud_discoveryengine_v1alpha_purge_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


