# GoogleCloudDocumentaiV1BatchProcessRequest

Request message for BatchProcessDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_output_config** | [**GoogleCloudDocumentaiV1DocumentOutputConfig**](GoogleCloudDocumentaiV1DocumentOutputConfig.md) |  | [optional] 
**input_documents** | [**GoogleCloudDocumentaiV1BatchDocumentsInputConfig**](GoogleCloudDocumentaiV1BatchDocumentsInputConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints) and can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter. | [optional] 
**process_options** | [**GoogleCloudDocumentaiV1ProcessOptions**](GoogleCloudDocumentaiV1ProcessOptions.md) |  | [optional] 
**skip_human_review** | **bool** | Whether human review should be skipped for this request. Default to &#x60;false&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_batch_process_request import GoogleCloudDocumentaiV1BatchProcessRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1BatchProcessRequest from a JSON string
google_cloud_documentai_v1_batch_process_request_instance = GoogleCloudDocumentaiV1BatchProcessRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1BatchProcessRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1_batch_process_request_dict = google_cloud_documentai_v1_batch_process_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1BatchProcessRequest from a dict
google_cloud_documentai_v1_batch_process_request_from_dict = GoogleCloudDocumentaiV1BatchProcessRequest.from_dict(google_cloud_documentai_v1_batch_process_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


