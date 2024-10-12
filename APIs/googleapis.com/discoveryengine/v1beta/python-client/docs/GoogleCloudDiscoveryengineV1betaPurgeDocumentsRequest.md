# GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest

Request message for DocumentService.PurgeDocuments method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Required. Filter matching documents to purge. Only currently supported value is &#x60;*&#x60; (all items). | [optional] 
**force** | **bool** | Actually performs the purge. If &#x60;force&#x60; is set to false, return the expected purge count without deleting any documents. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_purge_documents_request import GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest from a JSON string
google_cloud_discoveryengine_v1beta_purge_documents_request_instance = GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_purge_documents_request_dict = google_cloud_discoveryengine_v1beta_purge_documents_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest from a dict
google_cloud_discoveryengine_v1beta_purge_documents_request_from_dict = GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest.from_dict(google_cloud_discoveryengine_v1beta_purge_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


