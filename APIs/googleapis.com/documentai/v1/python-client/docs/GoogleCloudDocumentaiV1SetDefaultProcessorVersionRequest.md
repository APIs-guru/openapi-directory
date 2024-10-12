# GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest

Request message for the SetDefaultProcessorVersion method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_processor_version** | **str** | Required. The resource name of child ProcessorVersion to use as default. Format: &#x60;projects/{project}/locations/{location}/processors/{processor}/processorVersions/{version}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_set_default_processor_version_request import GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest from a JSON string
google_cloud_documentai_v1_set_default_processor_version_request_instance = GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest.to_json())

# convert the object into a dict
google_cloud_documentai_v1_set_default_processor_version_request_dict = google_cloud_documentai_v1_set_default_processor_version_request_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest from a dict
google_cloud_documentai_v1_set_default_processor_version_request_from_dict = GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest.from_dict(google_cloud_documentai_v1_set_default_processor_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


