# ClusterUpgradeCompleteEvent

Cluster Upgrade Complete event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overall_upgrade_elapsed_time_in_ms** | **float** | Overall duration of upgrade in milli-seconds. | 
**target_cluster_version** | **str** | Target Cluster version. | 

## Example

```python
from openapi_client.models.cluster_upgrade_complete_event import ClusterUpgradeCompleteEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeCompleteEvent from a JSON string
cluster_upgrade_complete_event_instance = ClusterUpgradeCompleteEvent.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeCompleteEvent.to_json())

# convert the object into a dict
cluster_upgrade_complete_event_dict = cluster_upgrade_complete_event_instance.to_dict()
# create an instance of ClusterUpgradeCompleteEvent from a dict
cluster_upgrade_complete_event_from_dict = ClusterUpgradeCompleteEvent.from_dict(cluster_upgrade_complete_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


