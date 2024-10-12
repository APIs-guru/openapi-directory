# VmSizeCompatibilityFilterV2

This class represent a single filter object that defines a multidimensional set. The dimensions of this set are Regions, ClusterFlavors, NodeTypes and ClusterVersions. The constraint should be defined based on the following: FilterMode (Exclude vs Include), VMSizes (the vm sizes in affect of exclusion/inclusion) and the ordering of the Filters. Later filters override previous settings if conflicted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_flavors** | **List[str]** | The list of cluster flavors under the effect of the filter. | [optional] 
**cluster_versions** | **List[str]** | The list of cluster versions affected in Major.Minor format. | [optional] 
**filter_mode** | **str** | The filtering mode. Effectively this can enabling or disabling the VM sizes in a particular set. | [optional] 
**node_types** | **List[str]** | The list of node types affected by the filter. | [optional] 
**os_type** | **List[str]** | The OSType affected, Windows or Linux. | [optional] 
**regions** | **List[str]** | The list of regions under the effect of the filter. | [optional] 
**vm_sizes** | **List[str]** | The list of virtual machine sizes to include or exclude. | [optional] 

## Example

```python
from openapi_client.models.vm_size_compatibility_filter_v2 import VmSizeCompatibilityFilterV2

# TODO update the JSON string below
json = "{}"
# create an instance of VmSizeCompatibilityFilterV2 from a JSON string
vm_size_compatibility_filter_v2_instance = VmSizeCompatibilityFilterV2.from_json(json)
# print the JSON string representation of the object
print(VmSizeCompatibilityFilterV2.to_json())

# convert the object into a dict
vm_size_compatibility_filter_v2_dict = vm_size_compatibility_filter_v2_instance.to_dict()
# create an instance of VmSizeCompatibilityFilterV2 from a dict
vm_size_compatibility_filter_v2_from_dict = VmSizeCompatibilityFilterV2.from_dict(vm_size_compatibility_filter_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


