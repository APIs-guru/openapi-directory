# GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata

The long-running operation metadata for the DeployProcessorVersion method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_metadata** | [**GoogleCloudDocumentaiV1beta3CommonOperationMetadata**](GoogleCloudDocumentaiV1beta3CommonOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_deploy_processor_version_metadata import GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata from a JSON string
google_cloud_documentai_v1beta3_deploy_processor_version_metadata_instance = GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_deploy_processor_version_metadata_dict = google_cloud_documentai_v1beta3_deploy_processor_version_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata from a dict
google_cloud_documentai_v1beta3_deploy_processor_version_metadata_from_dict = GoogleCloudDocumentaiV1beta3DeployProcessorVersionMetadata.from_dict(google_cloud_documentai_v1beta3_deploy_processor_version_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


