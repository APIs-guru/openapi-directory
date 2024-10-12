# GoogleCloudDocumentaiV1beta3ListDocumentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_metadata** | [**List[GoogleCloudDocumentaiV1beta3DocumentMetadata]**](GoogleCloudDocumentaiV1beta3DocumentMetadata.md) | Document metadata corresponding to the listed documents. | [optional] 
**next_page_token** | **str** | A token, which can be sent as ListDocumentsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**total_size** | **int** | Total count of documents queried. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_list_documents_response import GoogleCloudDocumentaiV1beta3ListDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ListDocumentsResponse from a JSON string
google_cloud_documentai_v1beta3_list_documents_response_instance = GoogleCloudDocumentaiV1beta3ListDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ListDocumentsResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_list_documents_response_dict = google_cloud_documentai_v1beta3_list_documents_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ListDocumentsResponse from a dict
google_cloud_documentai_v1beta3_list_documents_response_from_dict = GoogleCloudDocumentaiV1beta3ListDocumentsResponse.from_dict(google_cloud_documentai_v1beta3_list_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


