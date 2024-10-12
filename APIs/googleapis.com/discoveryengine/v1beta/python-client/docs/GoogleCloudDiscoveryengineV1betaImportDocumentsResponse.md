# GoogleCloudDiscoveryengineV1betaImportDocumentsResponse

Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_config** | [**GoogleCloudDiscoveryengineV1betaImportErrorConfig**](GoogleCloudDiscoveryengineV1betaImportErrorConfig.md) |  | [optional] 
**error_samples** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | A sample of errors encountered while processing the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_import_documents_response import GoogleCloudDiscoveryengineV1betaImportDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaImportDocumentsResponse from a JSON string
google_cloud_discoveryengine_v1beta_import_documents_response_instance = GoogleCloudDiscoveryengineV1betaImportDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaImportDocumentsResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_import_documents_response_dict = google_cloud_discoveryengine_v1beta_import_documents_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaImportDocumentsResponse from a dict
google_cloud_discoveryengine_v1beta_import_documents_response_from_dict = GoogleCloudDiscoveryengineV1betaImportDocumentsResponse.from_dict(google_cloud_discoveryengine_v1beta_import_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


