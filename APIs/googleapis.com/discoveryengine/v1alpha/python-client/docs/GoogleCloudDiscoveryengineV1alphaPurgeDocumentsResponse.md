# GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponse

Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purge_count** | **str** | The total count of documents purged as a result of the operation. | [optional] 
**purge_sample** | **List[str]** | A sample of document names that will be deleted. Only populated if &#x60;force&#x60; is set to false. A max of 100 names will be returned and the names are chosen at random. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_purge_documents_response import GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponse from a JSON string
google_cloud_discoveryengine_v1alpha_purge_documents_response_instance = GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_purge_documents_response_dict = google_cloud_discoveryengine_v1alpha_purge_documents_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponse from a dict
google_cloud_discoveryengine_v1alpha_purge_documents_response_from_dict = GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponse.from_dict(google_cloud_discoveryengine_v1alpha_purge_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


