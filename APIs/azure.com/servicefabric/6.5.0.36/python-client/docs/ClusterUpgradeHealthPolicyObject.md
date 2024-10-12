# ClusterUpgradeHealthPolicyObject

Defines a health policy used to evaluate the health of the cluster during a cluster upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_delta_unhealthy_nodes** | **int** | The maximum allowed percentage of nodes health degradation allowed during cluster upgrades. The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation. The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. The default value is 10%. | [optional] 
**max_percent_upgrade_domain_delta_unhealthy_nodes** | **int** | The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades. The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation. The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits. The default value is 15%. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_health_policy_object import ClusterUpgradeHealthPolicyObject

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeHealthPolicyObject from a JSON string
cluster_upgrade_health_policy_object_instance = ClusterUpgradeHealthPolicyObject.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeHealthPolicyObject.to_json())

# convert the object into a dict
cluster_upgrade_health_policy_object_dict = cluster_upgrade_health_policy_object_instance.to_dict()
# create an instance of ClusterUpgradeHealthPolicyObject from a dict
cluster_upgrade_health_policy_object_from_dict = ClusterUpgradeHealthPolicyObject.from_dict(cluster_upgrade_health_policy_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


