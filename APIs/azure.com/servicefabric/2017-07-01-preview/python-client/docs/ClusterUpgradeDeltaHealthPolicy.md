# ClusterUpgradeDeltaHealthPolicy

Describes the delta health policies for the cluster upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_delta_unhealthy_applications** | **int** | The maximum allowed percentage of applications health degradation allowed during cluster upgrades. The delta is measured between the state of the applications at the beginning of upgrade and the state of the applications at the time of the health evaluation. The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. System services are not included in this. | 
**max_percent_delta_unhealthy_nodes** | **int** | The maximum allowed percentage of nodes health degradation allowed during cluster upgrades. The delta is measured between the state of the nodes at the beginning of upgrade and the state of the nodes at the time of the health evaluation. The check is performed after every upgrade domain upgrade completion to make sure the global state of the cluster is within tolerated limits. | 
**max_percent_upgrade_domain_delta_unhealthy_nodes** | **int** | The maximum allowed percentage of upgrade domain nodes health degradation allowed during cluster upgrades. The delta is measured between the state of the upgrade domain nodes at the beginning of upgrade and the state of the upgrade domain nodes at the time of the health evaluation. The check is performed after every upgrade domain upgrade completion for all completed upgrade domains to make sure the state of the upgrade domains is within tolerated limits.  | 

## Example

```python
from openapi_client.models.cluster_upgrade_delta_health_policy import ClusterUpgradeDeltaHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeDeltaHealthPolicy from a JSON string
cluster_upgrade_delta_health_policy_instance = ClusterUpgradeDeltaHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeDeltaHealthPolicy.to_json())

# convert the object into a dict
cluster_upgrade_delta_health_policy_dict = cluster_upgrade_delta_health_policy_instance.to_dict()
# create an instance of ClusterUpgradeDeltaHealthPolicy from a dict
cluster_upgrade_delta_health_policy_from_dict = ClusterUpgradeDeltaHealthPolicy.from_dict(cluster_upgrade_delta_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


