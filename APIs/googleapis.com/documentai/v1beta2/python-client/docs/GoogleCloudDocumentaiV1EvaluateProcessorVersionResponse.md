# GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse

Response of the EvaluateProcessorVersion method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation** | **str** | The resource name of the created evaluation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_evaluate_processor_version_response import GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse from a JSON string
google_cloud_documentai_v1_evaluate_processor_version_response_instance = GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1_evaluate_processor_version_response_dict = google_cloud_documentai_v1_evaluate_processor_version_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse from a dict
google_cloud_documentai_v1_evaluate_processor_version_response_from_dict = GoogleCloudDocumentaiV1EvaluateProcessorVersionResponse.from_dict(google_cloud_documentai_v1_evaluate_processor_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


