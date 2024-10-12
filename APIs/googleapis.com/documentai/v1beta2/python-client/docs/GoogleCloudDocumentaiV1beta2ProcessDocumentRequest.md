# GoogleCloudDocumentaiV1beta2ProcessDocumentRequest

Request to process one document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automl_params** | [**GoogleCloudDocumentaiV1beta2AutoMlParams**](GoogleCloudDocumentaiV1beta2AutoMlParams.md) |  | [optional] 
**document_type** | **str** | Specifies a known document type for deeper structure detection. Valid values are currently \&quot;general\&quot; and \&quot;invoice\&quot;. If not provided, \&quot;general\&quot;\\ is used as default. If any other value is given, the request is rejected. | [optional] 
**entity_extraction_params** | [**GoogleCloudDocumentaiV1beta2EntityExtractionParams**](GoogleCloudDocumentaiV1beta2EntityExtractionParams.md) |  | [optional] 
**form_extraction_params** | [**GoogleCloudDocumentaiV1beta2FormExtractionParams**](GoogleCloudDocumentaiV1beta2FormExtractionParams.md) |  | [optional] 
**input_config** | [**GoogleCloudDocumentaiV1beta2InputConfig**](GoogleCloudDocumentaiV1beta2InputConfig.md) |  | [optional] 
**ocr_params** | [**GoogleCloudDocumentaiV1beta2OcrParams**](GoogleCloudDocumentaiV1beta2OcrParams.md) |  | [optional] 
**output_config** | [**GoogleCloudDocumentaiV1beta2OutputConfig**](GoogleCloudDocumentaiV1beta2OutputConfig.md) |  | [optional] 
**parent** | **str** | Target project and location to make a call. Format: &#x60;projects/{project-id}/locations/{location-id}&#x60;. If no location is specified, a region will be chosen automatically. This field is only populated when used in ProcessDocument method. | [optional] 
**table_extraction_params** | [**GoogleCloudDocumentaiV1beta2TableExtractionParams**](GoogleCloudDocumentaiV1beta2TableExtractionParams.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_process_document_request import GoogleCloudDocumentaiV1beta2ProcessDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2ProcessDocumentRequest from a JSON string
google_cloud_documentai_v1beta2_process_document_request_instance = GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_process_document_request_dict = google_cloud_documentai_v1beta2_process_document_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2ProcessDocumentRequest from a dict
google_cloud_documentai_v1beta2_process_document_request_from_dict = GoogleCloudDocumentaiV1beta2ProcessDocumentRequest.from_dict(google_cloud_documentai_v1beta2_process_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


