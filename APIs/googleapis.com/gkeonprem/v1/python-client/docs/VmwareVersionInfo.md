# VmwareVersionInfo

Contains information about a specific Anthos on VMware version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependencies** | [**List[UpgradeDependency]**](UpgradeDependency.md) | The list of upgrade dependencies for this version. | [optional] 
**has_dependencies** | **bool** | If set, the cluster dependencies (e.g. the admin cluster, other user clusters managed by the same admin cluster) must be upgraded before this version can be installed or upgraded to. | [optional] 
**is_installed** | **bool** | If set, the version is installed in the admin cluster. Otherwise, the version bundle must be downloaded and installed before a user cluster can be created at or upgraded to this version. | [optional] 
**version** | **str** | Version number e.g. 1.13.1-gke.1000. | [optional] 

## Example

```python
from openapi_client.models.vmware_version_info import VmwareVersionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareVersionInfo from a JSON string
vmware_version_info_instance = VmwareVersionInfo.from_json(json)
# print the JSON string representation of the object
print(VmwareVersionInfo.to_json())

# convert the object into a dict
vmware_version_info_dict = vmware_version_info_instance.to_dict()
# create an instance of VmwareVersionInfo from a dict
vmware_version_info_from_dict = VmwareVersionInfo.from_dict(vmware_version_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


