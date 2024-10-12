# GoogleCloudDocumentaiV1EvaluateProcessorVersionRequest

Evaluates the given ProcessorVersion against the supplied documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation_documents** | [**GoogleCloudDocumentaiV1BatchDocumentsInputConfig**](GoogleCloudDocumentaiV1BatchDocumentsInputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_evaluate_processor_version_request import GoogleCloudDocumentaiV1EvaluateProcessorVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1EvaluateProcessorVersionRequest from a JSON string
google_cloud_documentai_v1_evaluate_processor_version_request_instance = GoogleCloudDocumentaiV1EvaluateProcessorVersionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1EvaluateProcessorVersionRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1_evaluate_processor_version_request_dict = google_cloud_documentai_v1_evaluate_processor_version_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1EvaluateProcessorVersionRequest from a dict
google_cloud_documentai_v1_evaluate_processor_version_request_from_dict = GoogleCloudDocumentaiV1EvaluateProcessorVersionRequest.from_dict(google_cloud_documentai_v1_evaluate_processor_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


