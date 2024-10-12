# ManagedClusterWindowsProfile

Profile for Windows VMs in the container service cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_password** | **str** | The administrator password to use for Windows VMs. | [optional] 
**admin_username** | **str** | The administrator username to use for Windows VMs. | 

## Example

```python
from openapi_client.models.managed_cluster_windows_profile import ManagedClusterWindowsProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterWindowsProfile from a JSON string
managed_cluster_windows_profile_instance = ManagedClusterWindowsProfile.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterWindowsProfile.to_json())

# convert the object into a dict
managed_cluster_windows_profile_dict = managed_cluster_windows_profile_instance.to_dict()
# create an instance of ManagedClusterWindowsProfile from a dict
managed_cluster_windows_profile_from_dict = ManagedClusterWindowsProfile.from_dict(managed_cluster_windows_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


