# ManagedClusterUpgradeProfileProperties

Control plane and agent pool upgrade profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_pool_profiles** | [**List[ManagedClusterPoolUpgradeProfile]**](ManagedClusterPoolUpgradeProfile.md) | The list of available upgrade versions for agent pools. | 
**control_plane_profile** | [**ManagedClusterPoolUpgradeProfile**](ManagedClusterPoolUpgradeProfile.md) |  | 

## Example

```python
from openapi_client.models.managed_cluster_upgrade_profile_properties import ManagedClusterUpgradeProfileProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterUpgradeProfileProperties from a JSON string
managed_cluster_upgrade_profile_properties_instance = ManagedClusterUpgradeProfileProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterUpgradeProfileProperties.to_json())

# convert the object into a dict
managed_cluster_upgrade_profile_properties_dict = managed_cluster_upgrade_profile_properties_instance.to_dict()
# create an instance of ManagedClusterUpgradeProfileProperties from a dict
managed_cluster_upgrade_profile_properties_from_dict = ManagedClusterUpgradeProfileProperties.from_dict(managed_cluster_upgrade_profile_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


