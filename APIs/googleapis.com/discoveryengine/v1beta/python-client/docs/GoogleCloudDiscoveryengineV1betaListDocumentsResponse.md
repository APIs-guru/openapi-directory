# GoogleCloudDiscoveryengineV1betaListDocumentsResponse

Response message for DocumentService.ListDocuments method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[GoogleCloudDiscoveryengineV1betaDocument]**](GoogleCloudDiscoveryengineV1betaDocument.md) | The Documents. | [optional] 
**next_page_token** | **str** | A token that can be sent as ListDocumentsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_list_documents_response import GoogleCloudDiscoveryengineV1betaListDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaListDocumentsResponse from a JSON string
google_cloud_discoveryengine_v1beta_list_documents_response_instance = GoogleCloudDiscoveryengineV1betaListDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaListDocumentsResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_list_documents_response_dict = google_cloud_discoveryengine_v1beta_list_documents_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaListDocumentsResponse from a dict
google_cloud_discoveryengine_v1beta_list_documents_response_from_dict = GoogleCloudDiscoveryengineV1betaListDocumentsResponse.from_dict(google_cloud_discoveryengine_v1beta_list_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


