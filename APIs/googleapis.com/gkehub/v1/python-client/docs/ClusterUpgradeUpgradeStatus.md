# ClusterUpgradeUpgradeStatus

UpgradeStatus provides status information for each upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Status code of the upgrade. | [optional] 
**reason** | **str** | Reason for this status. | [optional] 
**update_time** | **str** | Last timestamp the status was updated. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_upgrade_status import ClusterUpgradeUpgradeStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeUpgradeStatus from a JSON string
cluster_upgrade_upgrade_status_instance = ClusterUpgradeUpgradeStatus.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeUpgradeStatus.to_json())

# convert the object into a dict
cluster_upgrade_upgrade_status_dict = cluster_upgrade_upgrade_status_instance.to_dict()
# create an instance of ClusterUpgradeUpgradeStatus from a dict
cluster_upgrade_upgrade_status_from_dict = ClusterUpgradeUpgradeStatus.from_dict(cluster_upgrade_upgrade_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


