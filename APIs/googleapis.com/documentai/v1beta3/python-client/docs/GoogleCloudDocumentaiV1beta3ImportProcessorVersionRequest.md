# GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest

The request message for the ImportProcessorVersion method. The Document AI [Service Agent](https://cloud.google.com/iam/docs/service-agents) of the destination project must have [Document AI Editor role](https://cloud.google.com/document-ai/docs/access-control/iam-roles) on the source project. The destination project is specified as part of the parent field. The source project is specified as part of the source or external_processor_version_source field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_processor_version_source** | [**GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestExternalProcessorVersionSource**](GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequestExternalProcessorVersionSource.md) |  | [optional] 
**processor_version_source** | **str** | The source processor version to import from. The source processor version and destination processor need to be in the same environment and region. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_import_processor_version_request import GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest from a JSON string
google_cloud_documentai_v1beta3_import_processor_version_request_instance = GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_import_processor_version_request_dict = google_cloud_documentai_v1beta3_import_processor_version_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest from a dict
google_cloud_documentai_v1beta3_import_processor_version_request_from_dict = GoogleCloudDocumentaiV1beta3ImportProcessorVersionRequest.from_dict(google_cloud_documentai_v1beta3_import_processor_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


