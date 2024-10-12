# ClusterUpgradeIgnoredMembership

IgnoredMembership represents a membership ignored by the feature. A membership can be ignored because it was manually upgraded to a newer version than RC default.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignored_time** | **str** | Time when the membership was first set to ignored. | [optional] 
**reason** | **str** | Reason why the membership is ignored. | [optional] 

## Example

```python
from openapi_client.models.cluster_upgrade_ignored_membership import ClusterUpgradeIgnoredMembership

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterUpgradeIgnoredMembership from a JSON string
cluster_upgrade_ignored_membership_instance = ClusterUpgradeIgnoredMembership.from_json(json)
# print the JSON string representation of the object
print(ClusterUpgradeIgnoredMembership.to_json())

# convert the object into a dict
cluster_upgrade_ignored_membership_dict = cluster_upgrade_ignored_membership_instance.to_dict()
# create an instance of ClusterUpgradeIgnoredMembership from a dict
cluster_upgrade_ignored_membership_from_dict = ClusterUpgradeIgnoredMembership.from_dict(cluster_upgrade_ignored_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


