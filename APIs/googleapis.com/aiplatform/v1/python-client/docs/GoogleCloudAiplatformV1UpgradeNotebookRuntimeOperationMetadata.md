# GoogleCloudAiplatformV1UpgradeNotebookRuntimeOperationMetadata

Metadata information for NotebookService.UpgradeNotebookRuntime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generic_metadata** | [**GoogleCloudAiplatformV1GenericOperationMetadata**](GoogleCloudAiplatformV1GenericOperationMetadata.md) |  | [optional] 
**progress_message** | **str** | A human-readable message that shows the intermediate progress details of NotebookRuntime. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_upgrade_notebook_runtime_operation_metadata import GoogleCloudAiplatformV1UpgradeNotebookRuntimeOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1UpgradeNotebookRuntimeOperationMetadata from a JSON string
google_cloud_aiplatform_v1_upgrade_notebook_runtime_operation_metadata_instance = GoogleCloudAiplatformV1UpgradeNotebookRuntimeOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1UpgradeNotebookRuntimeOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_upgrade_notebook_runtime_operation_metadata_dict = google_cloud_aiplatform_v1_upgrade_notebook_runtime_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1UpgradeNotebookRuntimeOperationMetadata from a dict
google_cloud_aiplatform_v1_upgrade_notebook_runtime_operation_metadata_from_dict = GoogleCloudAiplatformV1UpgradeNotebookRuntimeOperationMetadata.from_dict(google_cloud_aiplatform_v1_upgrade_notebook_runtime_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


