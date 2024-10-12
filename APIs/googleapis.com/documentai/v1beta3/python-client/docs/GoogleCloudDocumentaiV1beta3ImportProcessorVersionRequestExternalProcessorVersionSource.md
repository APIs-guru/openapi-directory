# GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestExternalProcessorVersionSource

The external source processor version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processor_version** | **str** | Required. The processor version name. Format: &#x60;projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}&#x60; | [optional] 
**service_endpoint** | **str** | Optional. The Document AI service endpoint. For example, &#39;https://us-documentai.googleapis.com&#39; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_import_processor_version_request_external_processor_version_source import GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestExternalProcessorVersionSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestExternalProcessorVersionSource from a JSON string
google_cloud_documentai_v1beta3_import_processor_version_request_external_processor_version_source_instance = GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestExternalProcessorVersionSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestExternalProcessorVersionSource.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_import_processor_version_request_external_processor_version_source_dict = google_cloud_documentai_v1beta3_import_processor_version_request_external_processor_version_source_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestExternalProcessorVersionSource from a dict
google_cloud_documentai_v1beta3_import_processor_version_request_external_processor_version_source_from_dict = GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestExternalProcessorVersionSource.from_dict(google_cloud_documentai_v1beta3_import_processor_version_request_external_processor_version_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


