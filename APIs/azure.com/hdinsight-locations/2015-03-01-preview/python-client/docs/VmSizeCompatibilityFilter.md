# VmSizeCompatibilityFilter

The virtual machine type compatibility filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_flavors** | **List[str]** | The list of cluster types available. | [optional] 
**cluster_versions** | **List[str]** | The list of cluster versions. | [optional] 
**filter_mode** | **str** | The mode for the filter. | [optional] 
**node_types** | **List[str]** | The list of node types. | [optional] 
**regions** | **List[str]** | The list of regions. | [optional] 
**vmsizes** | **List[str]** | The list of virtual machine sizes. | [optional] 

## Example

```python
from openapi_client.models.vm_size_compatibility_filter import VmSizeCompatibilityFilter

# TODO update the JSON string below
json = "{}"
# create an instance of VmSizeCompatibilityFilter from a JSON string
vm_size_compatibility_filter_instance = VmSizeCompatibilityFilter.from_json(json)
# print the JSON string representation of the object
print(VmSizeCompatibilityFilter.to_json())

# convert the object into a dict
vm_size_compatibility_filter_dict = vm_size_compatibility_filter_instance.to_dict()
# create an instance of VmSizeCompatibilityFilter from a dict
vm_size_compatibility_filter_from_dict = VmSizeCompatibilityFilter.from_dict(vm_size_compatibility_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


