# GoogleCloudDocumentaiV1TrainProcessorVersionRequestCustomDocumentExtractionOptions

Options to control the training of the Custom Document Extraction (CDE) Processor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**training_method** | **str** | Training method to use for CDE training. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_train_processor_version_request_custom_document_extraction_options import GoogleCloudDocumentaiV1TrainProcessorVersionRequestCustomDocumentExtractionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1TrainProcessorVersionRequestCustomDocumentExtractionOptions from a JSON string
google_cloud_documentai_v1_train_processor_version_request_custom_document_extraction_options_instance = GoogleCloudDocumentaiV1TrainProcessorVersionRequestCustomDocumentExtractionOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1TrainProcessorVersionRequestCustomDocumentExtractionOptions.to_json())

# convert the object into a dict
google_cloud_documentai_v1_train_processor_version_request_custom_document_extraction_options_dict = google_cloud_documentai_v1_train_processor_version_request_custom_document_extraction_options_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1TrainProcessorVersionRequestCustomDocumentExtractionOptions from a dict
google_cloud_documentai_v1_train_processor_version_request_custom_document_extraction_options_from_dict = GoogleCloudDocumentaiV1TrainProcessorVersionRequestCustomDocumentExtractionOptions.from_dict(google_cloud_documentai_v1_train_processor_version_request_custom_document_extraction_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


