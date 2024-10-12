# ClusterUpgradeCompletedEvent

Cluster Upgrade Completed event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overall_upgrade_elapsed_time_in_ms** | **float** | Overall duration of upgrade in milli-seconds. | 
**target_cluster_version** | **str** | Target Cluster version. | 

## Example

```python
from openapi_client.models.cluster_upgrade_completed_event import ClusterUpgradeCompletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeCompletedEvent from a JSON string
cluster_upgrade_completed_event_instance = ClusterUpgradeCompletedEvent.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeCompletedEvent.to_json())

# convert the object into a dict
cluster_upgrade_completed_event_dict = cluster_upgrade_completed_event_instance.to_dict()
# create an instance of ClusterUpgradeCompletedEvent from a dict
cluster_upgrade_completed_event_from_dict = ClusterUpgradeCompletedEvent.from_dict(cluster_upgrade_completed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


