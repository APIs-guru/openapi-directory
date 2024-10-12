# ClusterUpgradeHealthPolicy

The upgrade health policy of the cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_delta_unhealthy_nodes** | **int** | The max percent of the delta unhealthy nodes, values are [0-100] | [optional] 
**max_percent_upgrade_domain_delta_unhealthy_nodes** | **int** | The max percent of the upgrade domain delta unhealthy nodes, values are [0-100] | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_health_policy import ClusterUpgradeHealthPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeHealthPolicy from a JSON string
cluster_upgrade_health_policy_instance = ClusterUpgradeHealthPolicy.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeHealthPolicy.to_json())

# convert the object into a dict
cluster_upgrade_health_policy_dict = cluster_upgrade_health_policy_instance.to_dict()
# create an instance of ClusterUpgradeHealthPolicy from a dict
cluster_upgrade_health_policy_from_dict = ClusterUpgradeHealthPolicy.from_dict(cluster_upgrade_health_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


