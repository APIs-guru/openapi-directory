# ClusterResourceRestoreScope

Defines the scope of cluster-scoped resources to restore. Some group kinds are not reasonable choices for a restore, and will cause an error if selected here. Any scope selection that would restore \"all valid\" resources automatically excludes these group kinds. - gkebackup.gke.io/BackupJob - gkebackup.gke.io/RestoreJob - metrics.k8s.io/NodeMetrics - migration.k8s.io/StorageState - migration.k8s.io/StorageVersionMigration - Node - snapshot.storage.k8s.io/VolumeSnapshotContent - storage.k8s.io/CSINode Some group kinds are driven by restore configuration elsewhere, and will cause an error if selected here. - Namespace - PersistentVolume

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_group_kinds** | **bool** | Optional. If True, all valid cluster-scoped resources will be restored. Mutually exclusive to any other field in the message. | [optional] 
**excluded_group_kinds** | [**List[GroupKind]**](GroupKind.md) | Optional. A list of cluster-scoped resource group kinds to NOT restore from the backup. If specified, all valid cluster-scoped resources will be restored except for those specified in the list. Mutually exclusive to any other field in the message. | [optional] 
**no_group_kinds** | **bool** | Optional. If True, no cluster-scoped resources will be restored. This has the same restore scope as if the message is not defined. Mutually exclusive to any other field in the message. | [optional] 
**selected_group_kinds** | [**List[GroupKind]**](GroupKind.md) | Optional. A list of cluster-scoped resource group kinds to restore from the backup. If specified, only the selected resources will be restored. Mutually exclusive to any other field in the message. | [optional] 

## Example

```python
from openapi_client.models.cluster_resource_restore_scope import ClusterResourceRestoreScope

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterResourceRestoreScope from a JSON string
cluster_resource_restore_scope_instance = ClusterResourceRestoreScope.from_json(json)
# print the JSON string representation of the object
print(ClusterResourceRestoreScope.to_json())

# convert the object into a dict
cluster_resource_restore_scope_dict = cluster_resource_restore_scope_instance.to_dict()
# create an instance of ClusterResourceRestoreScope from a dict
cluster_resource_restore_scope_from_dict = ClusterResourceRestoreScope.from_dict(cluster_resource_restore_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


