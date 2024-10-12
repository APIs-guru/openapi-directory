# GoogleCloudDocumentaiV1beta3ListDocumentsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Optional. Query to filter the documents based on https://google.aip.dev/160. ## Currently support query strings are: &#x60;SplitType&#x3D;DATASET_SPLIT_TEST|DATASET_SPLIT_TRAIN|DATASET_SPLIT_UNASSIGNED&#x60; - &#x60;LabelingState&#x3D;DOCUMENT_LABELED|DOCUMENT_UNLABELED|DOCUMENT_AUTO_LABELED&#x60; - &#x60;DisplayName&#x3D;\\\&quot;file_name.pdf\\\&quot;&#x60; - &#x60;EntityType&#x3D;abc/def&#x60; - &#x60;TagName&#x3D;\\\&quot;auto-labeling-running\\\&quot;|\\\&quot;sampled\\\&quot;&#x60; Note: - Only &#x60;AND&#x60;, &#x60;&#x3D;&#x60; and &#x60;!&#x3D;&#x60; are supported. e.g. &#x60;DisplayName&#x3D;file_name AND EntityType!&#x3D;abc&#x60; IS supported. - Wildcard &#x60;*&#x60; is supported only in &#x60;DisplayName&#x60; filter - No duplicate filter keys are allowed, e.g. &#x60;EntityType&#x3D;a AND EntityType&#x3D;b&#x60; is NOT supported. - String match is case sensitive (for filter &#x60;DisplayName&#x60; &amp; &#x60;EntityType&#x60;). | [optional] 
**page_size** | **int** | The maximum number of documents to return. The service may return fewer than this value. If unspecified, at most 20 documents will be returned. The maximum value is 100; values above 100 will be coerced to 100. | [optional] 
**page_token** | **str** | A page token, received from a previous &#x60;ListDocuments&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListDocuments&#x60; must match the call that provided the page token. | [optional] 
**return_total_size** | **bool** | Optional. Controls if the request requires a total size of matched documents. See ListDocumentsResponse.total_size. Enabling this flag may adversely impact performance. Defaults to false. | [optional] 
**skip** | **int** | Optional. Number of results to skip beginning from the &#x60;page_token&#x60; if provided. https://google.aip.dev/158#skipping-results. It must be a non-negative integer. Negative values will be rejected. Note that this is not the number of pages to skip. If this value causes the cursor to move past the end of results, ListDocumentsResponse.document_metadata and ListDocumentsResponse.next_page_token will be empty. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_list_documents_request import GoogleCloudDocumentaiV1beta3ListDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ListDocumentsRequest from a JSON string
google_cloud_documentai_v1beta3_list_documents_request_instance = GoogleCloudDocumentaiV1beta3ListDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ListDocumentsRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_list_documents_request_dict = google_cloud_documentai_v1beta3_list_documents_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ListDocumentsRequest from a dict
google_cloud_documentai_v1beta3_list_documents_request_from_dict = GoogleCloudDocumentaiV1beta3ListDocumentsRequest.from_dict(google_cloud_documentai_v1beta3_list_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


