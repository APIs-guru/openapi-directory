# ManagedClusterAddonProfile

A Kubernetes add-on profile for a managed cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Key-value pairs for configuring an add-on. | [optional] 
**enabled** | **bool** | Whether the add-on is enabled or not. | 

## Example

```python
from openapi_client.models.managed_cluster_addon_profile import ManagedClusterAddonProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterAddonProfile from a JSON string
managed_cluster_addon_profile_instance = ManagedClusterAddonProfile.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterAddonProfile.to_json())

# convert the object into a dict
managed_cluster_addon_profile_dict = managed_cluster_addon_profile_instance.to_dict()
# create an instance of ManagedClusterAddonProfile from a dict
managed_cluster_addon_profile_from_dict = ManagedClusterAddonProfile.from_dict(managed_cluster_addon_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


