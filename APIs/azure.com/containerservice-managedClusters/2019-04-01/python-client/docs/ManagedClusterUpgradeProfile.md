# ManagedClusterUpgradeProfile

The list of available upgrades for compute pools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of upgrade profile. | [optional] [readonly] 
**name** | **str** | Name of upgrade profile. | [optional] [readonly] 
**properties** | [**ManagedClusterUpgradeProfileProperties**](ManagedClusterUpgradeProfileProperties.md) |  | 
**type** | **str** | Type of upgrade profile. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_cluster_upgrade_profile import ManagedClusterUpgradeProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterUpgradeProfile from a JSON string
managed_cluster_upgrade_profile_instance = ManagedClusterUpgradeProfile.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterUpgradeProfile.to_json())

# convert the object into a dict
managed_cluster_upgrade_profile_dict = managed_cluster_upgrade_profile_instance.to_dict()
# create an instance of ManagedClusterUpgradeProfile from a dict
managed_cluster_upgrade_profile_from_dict = ManagedClusterUpgradeProfile.from_dict(managed_cluster_upgrade_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


