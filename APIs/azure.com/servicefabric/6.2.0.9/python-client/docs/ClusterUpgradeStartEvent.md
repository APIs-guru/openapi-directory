# ClusterUpgradeStartEvent

Cluster Upgrade Start event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_cluster_version** | **str** | Current Cluster version. | 
**failure_action** | **str** | Action if failed. | 
**rolling_upgrade_mode** | **str** | Mode of upgrade. | 
**target_cluster_version** | **str** | Target Cluster version. | 
**upgrade_type** | **str** | Type of upgrade. | 

## Example

```python
from openapi_client.models.cluster_upgrade_start_event import ClusterUpgradeStartEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeStartEvent from a JSON string
cluster_upgrade_start_event_instance = ClusterUpgradeStartEvent.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeStartEvent.to_json())

# convert the object into a dict
cluster_upgrade_start_event_dict = cluster_upgrade_start_event_instance.to_dict()
# create an instance of ClusterUpgradeStartEvent from a dict
cluster_upgrade_start_event_from_dict = ClusterUpgradeStartEvent.from_dict(cluster_upgrade_start_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


