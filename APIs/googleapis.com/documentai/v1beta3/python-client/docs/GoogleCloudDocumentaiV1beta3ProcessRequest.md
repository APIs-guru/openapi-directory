# GoogleCloudDocumentaiV1beta3ProcessRequest

Request message for the ProcessDocument method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**GoogleCloudDocumentaiV1beta3Document**](GoogleCloudDocumentaiV1beta3Document.md) |  | [optional] 
**field_mask** | **str** | Specifies which fields to include in the ProcessResponse.document output. Only supports top-level document and pages field, so it must be in the form of &#x60;{document_field_name}&#x60; or &#x60;pages.{page_field_name}&#x60;. | [optional] 
**gcs_document** | [**GoogleCloudDocumentaiV1beta3GcsDocument**](GoogleCloudDocumentaiV1beta3GcsDocument.md) |  | [optional] 
**inline_document** | [**GoogleCloudDocumentaiV1beta3Document**](GoogleCloudDocumentaiV1beta3Document.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints) and can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. | [optional] 
**process_options** | [**GoogleCloudDocumentaiV1beta3ProcessOptions**](GoogleCloudDocumentaiV1beta3ProcessOptions.md) |  | [optional] 
**raw_document** | [**GoogleCloudDocumentaiV1beta3RawDocument**](GoogleCloudDocumentaiV1beta3RawDocument.md) |  | [optional] 
**skip_human_review** | **bool** | Whether human review should be skipped for this request. Default to &#x60;false&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_process_request import GoogleCloudDocumentaiV1beta3ProcessRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ProcessRequest from a JSON string
google_cloud_documentai_v1beta3_process_request_instance = GoogleCloudDocumentaiV1beta3ProcessRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ProcessRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_process_request_dict = google_cloud_documentai_v1beta3_process_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ProcessRequest from a dict
google_cloud_documentai_v1beta3_process_request_from_dict = GoogleCloudDocumentaiV1beta3ProcessRequest.from_dict(google_cloud_documentai_v1beta3_process_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


