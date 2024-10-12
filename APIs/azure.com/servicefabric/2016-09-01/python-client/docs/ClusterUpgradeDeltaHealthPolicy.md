# ClusterUpgradeDeltaHealthPolicy

Delta health policy for the cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_delta_unhealthy_applications** | **int** | Additional unhealthy applications percentage | 
**max_percent_delta_unhealthy_nodes** | **int** | Additional unhealthy nodes percentage | 
**max_percent_upgrade_domain_delta_unhealthy_nodes** | **int** | Additional unhealthy nodes percentage per upgrade domain  | 

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


