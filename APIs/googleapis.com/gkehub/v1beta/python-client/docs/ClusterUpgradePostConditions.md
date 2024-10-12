# ClusterUpgradePostConditions

Post conditional checks after an upgrade has been applied on all eligible clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**soaking** | **str** | Required. Amount of time to \&quot;soak\&quot; after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days. Required. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_post_conditions import ClusterUpgradePostConditions

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradePostConditions from a JSON string
cluster_upgrade_post_conditions_instance = ClusterUpgradePostConditions.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradePostConditions.to_json())

# convert the object into a dict
cluster_upgrade_post_conditions_dict = cluster_upgrade_post_conditions_instance.to_dict()
# create an instance of ClusterUpgradePostConditions from a dict
cluster_upgrade_post_conditions_from_dict = ClusterUpgradePostConditions.from_dict(cluster_upgrade_post_conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


