# GoogleCloudIntegrationsV1alphaExecutionSnapshot

Contains the snapshot of the execution for a given checkpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkpoint_task_number** | **str** | Indicates \&quot;after which checkpoint task&#39;s execution\&quot; this snapshot is taken. | [optional] 
**execution_snapshot_metadata** | [**GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata**](GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata.md) |  | [optional] 
**params** | [**Dict[str, GoogleCloudIntegrationsV1alphaValueType]**](GoogleCloudIntegrationsV1alphaValueType.md) | Parameters used during the execution. | [optional] 
**task_execution_details** | [**List[GoogleCloudIntegrationsV1alphaTaskExecutionDetails]**](GoogleCloudIntegrationsV1alphaTaskExecutionDetails.md) | All of the task execution details at the given point of time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_execution_snapshot import GoogleCloudIntegrationsV1alphaExecutionSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaExecutionSnapshot from a JSON string
google_cloud_integrations_v1alpha_execution_snapshot_instance = GoogleCloudIntegrationsV1alphaExecutionSnapshot.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaExecutionSnapshot.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_execution_snapshot_dict = google_cloud_integrations_v1alpha_execution_snapshot_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaExecutionSnapshot from a dict
google_cloud_integrations_v1alpha_execution_snapshot_from_dict = GoogleCloudIntegrationsV1alphaExecutionSnapshot.from_dict(google_cloud_integrations_v1alpha_execution_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


