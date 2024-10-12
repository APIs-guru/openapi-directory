# VmCapabilities

Migrating VM source information about the VM capabilities needed for some Compute Engine features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_os_capabilities_update_time** | **str** | Output only. The last time OS capabilities list was updated. | [optional] [readonly] 
**os_capabilities** | **List[str]** | Output only. Unordered list. List of certain VM OS capabilities needed for some Compute Engine features. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vm_capabilities import VmCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of VmCapabilities from a JSON string
vm_capabilities_instance = VmCapabilities.from_json(json)
# print the JSON string representation of the object
print(VmCapabilities.to_json())

# convert the object into a dict
vm_capabilities_dict = vm_capabilities_instance.to_dict()
# create an instance of VmCapabilities from a dict
vm_capabilities_from_dict = VmCapabilities.from_dict(vm_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


