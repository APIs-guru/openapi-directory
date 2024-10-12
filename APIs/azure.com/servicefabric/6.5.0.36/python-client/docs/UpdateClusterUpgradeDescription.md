# UpdateClusterUpgradeDescription

Parameters for updating a cluster upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_policy_map** | [**ApplicationHealthPolicies**](ApplicationHealthPolicies.md) |  | [optional] 
**cluster_health_policy** | [**ClusterHealthPolicy**](ClusterHealthPolicy.md) |  | [optional] 
**cluster_upgrade_health_policy** | [**ClusterUpgradeHealthPolicyObject**](ClusterUpgradeHealthPolicyObject.md) |  | [optional] 
**enable_delta_health_evaluation** | **bool** | When true, enables delta health evaluation rather than absolute health evaluation after completion of each upgrade domain. | [optional] 
**update_description** | [**RollingUpgradeUpdateDescription**](RollingUpgradeUpdateDescription.md) |  | [optional] 
**upgrade_kind** | [**UpgradeType**](UpgradeType.md) |  | [optional] [default to UpgradeType.ROLLING]

## Example

```python
from openapi_client.models.update_cluster_upgrade_description import UpdateClusterUpgradeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateClusterUpgradeDescription from a JSON string
update_cluster_upgrade_description_instance = UpdateClusterUpgradeDescription.from_json(json)
# print the JSON string representation of the object
print(UpdateClusterUpgradeDescription.to_json())

# convert the object into a dict
update_cluster_upgrade_description_dict = update_cluster_upgrade_description_instance.to_dict()
# create an instance of UpdateClusterUpgradeDescription from a dict
update_cluster_upgrade_description_from_dict = UpdateClusterUpgradeDescription.from_dict(update_cluster_upgrade_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


