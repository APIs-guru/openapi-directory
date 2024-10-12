# GoogleCloudDiscoveryengineLoggingImportErrorContext

The error payload that is populated on LRO import APIs, including the following: * `google.cloud.discoveryengine.v1alpha.DocumentService.ImportDocuments` * `google.cloud.discoveryengine.v1alpha.UserEventService.ImportUserEvents`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | **str** | The detailed content which caused the error on importing a document. | [optional] 
**gcs_path** | **str** | Google Cloud Storage file path of the import source. Can be set for batch operation error. | [optional] 
**line_number** | **str** | Line number of the content in file. Should be empty for permission or batch operation error. | [optional] 
**operation** | **str** | The operation resource name of the LRO. | [optional] 
**user_event** | **str** | The detailed content which caused the error on importing a user event. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_logging_import_error_context import GoogleCloudDiscoveryengineLoggingImportErrorContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineLoggingImportErrorContext from a JSON string
google_cloud_discoveryengine_logging_import_error_context_instance = GoogleCloudDiscoveryengineLoggingImportErrorContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineLoggingImportErrorContext.to_json())

# convert the object into a dict
google_cloud_discoveryengine_logging_import_error_context_dict = google_cloud_discoveryengine_logging_import_error_context_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineLoggingImportErrorContext from a dict
google_cloud_discoveryengine_logging_import_error_context_from_dict = GoogleCloudDiscoveryengineLoggingImportErrorContext.from_dict(google_cloud_discoveryengine_logging_import_error_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


