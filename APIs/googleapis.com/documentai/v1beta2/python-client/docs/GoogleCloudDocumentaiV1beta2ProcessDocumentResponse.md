# GoogleCloudDocumentaiV1beta2ProcessDocumentResponse

Response to a single document processing request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_config** | [**GoogleCloudDocumentaiV1beta2InputConfig**](GoogleCloudDocumentaiV1beta2InputConfig.md) |  | [optional] 
**output_config** | [**GoogleCloudDocumentaiV1beta2OutputConfig**](GoogleCloudDocumentaiV1beta2OutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_process_document_response import GoogleCloudDocumentaiV1beta2ProcessDocumentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2ProcessDocumentResponse from a JSON string
google_cloud_documentai_v1beta2_process_document_response_instance = GoogleCloudDocumentaiV1beta2ProcessDocumentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2ProcessDocumentResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_process_document_response_dict = google_cloud_documentai_v1beta2_process_document_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2ProcessDocumentResponse from a dict
google_cloud_documentai_v1beta2_process_document_response_from_dict = GoogleCloudDocumentaiV1beta2ProcessDocumentResponse.from_dict(google_cloud_documentai_v1beta2_process_document_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


