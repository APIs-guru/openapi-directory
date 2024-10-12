# GoogleCloudAiplatformV1RestoreDatasetVersionOperationMetadata

Runtime operation information for DatasetService.RestoreDatasetVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generic_metadata** | [**GoogleCloudAiplatformV1GenericOperationMetadata**](GoogleCloudAiplatformV1GenericOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_restore_dataset_version_operation_metadata import GoogleCloudAiplatformV1RestoreDatasetVersionOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1RestoreDatasetVersionOperationMetadata from a JSON string
google_cloud_aiplatform_v1_restore_dataset_version_operation_metadata_instance = GoogleCloudAiplatformV1RestoreDatasetVersionOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1RestoreDatasetVersionOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_restore_dataset_version_operation_metadata_dict = google_cloud_aiplatform_v1_restore_dataset_version_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1RestoreDatasetVersionOperationMetadata from a dict
google_cloud_aiplatform_v1_restore_dataset_version_operation_metadata_from_dict = GoogleCloudAiplatformV1RestoreDatasetVersionOperationMetadata.from_dict(google_cloud_aiplatform_v1_restore_dataset_version_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


