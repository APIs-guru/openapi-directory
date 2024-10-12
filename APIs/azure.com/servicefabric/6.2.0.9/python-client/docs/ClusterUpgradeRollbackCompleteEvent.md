# ClusterUpgradeRollbackCompleteEvent

Cluster Upgrade Rollback Complete event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_reason** | **str** | Describes failure. | 
**overall_upgrade_elapsed_time_in_ms** | **float** | Overall duration of upgrade in milli-seconds. | 
**target_cluster_version** | **str** | Target Cluster version. | 

## Example

```python
from openapi_client.models.cluster_upgrade_rollback_complete_event import ClusterUpgradeRollbackCompleteEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeRollbackCompleteEvent from a JSON string
cluster_upgrade_rollback_complete_event_instance = ClusterUpgradeRollbackCompleteEvent.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeRollbackCompleteEvent.to_json())

# convert the object into a dict
cluster_upgrade_rollback_complete_event_dict = cluster_upgrade_rollback_complete_event_instance.to_dict()
# create an instance of ClusterUpgradeRollbackCompleteEvent from a dict
cluster_upgrade_rollback_complete_event_from_dict = ClusterUpgradeRollbackCompleteEvent.from_dict(cluster_upgrade_rollback_complete_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


