# GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata

The long-running operation metadata for the SetDefaultProcessorVersion method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_metadata** | [**GoogleCloudDocumentaiV1CommonOperationMetadata**](GoogleCloudDocumentaiV1CommonOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_set_default_processor_version_metadata import GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata from a JSON string
google_cloud_documentai_v1_set_default_processor_version_metadata_instance = GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_v1_set_default_processor_version_metadata_dict = google_cloud_documentai_v1_set_default_processor_version_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata from a dict
google_cloud_documentai_v1_set_default_processor_version_metadata_from_dict = GoogleCloudDocumentaiV1SetDefaultProcessorVersionMetadata.from_dict(google_cloud_documentai_v1_set_default_processor_version_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


