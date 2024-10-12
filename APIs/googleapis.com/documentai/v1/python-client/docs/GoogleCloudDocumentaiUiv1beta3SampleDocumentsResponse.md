# GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponse

Response of the sample documents operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sample_test_status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**sample_training_status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**selected_documents** | [**List[GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseSelectedDocument]**](GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponseSelectedDocument.md) | The result of the sampling process. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_sample_documents_response import GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponse from a JSON string
google_cloud_documentai_uiv1beta3_sample_documents_response_instance = GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponse.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_sample_documents_response_dict = google_cloud_documentai_uiv1beta3_sample_documents_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponse from a dict
google_cloud_documentai_uiv1beta3_sample_documents_response_from_dict = GoogleCloudDocumentaiUiv1beta3SampleDocumentsResponse.from_dict(google_cloud_documentai_uiv1beta3_sample_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


