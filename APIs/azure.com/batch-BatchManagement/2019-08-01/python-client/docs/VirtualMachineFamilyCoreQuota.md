# VirtualMachineFamilyCoreQuota

A VM Family and its associated core quota for the Batch account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_quota** | **int** | The core quota for the VM family for the Batch account. | [optional] [readonly] 
**name** | **str** | The Virtual Machine family name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_family_core_quota import VirtualMachineFamilyCoreQuota

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineFamilyCoreQuota from a JSON string
virtual_machine_family_core_quota_instance = VirtualMachineFamilyCoreQuota.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineFamilyCoreQuota.to_json())

# convert the object into a dict
virtual_machine_family_core_quota_dict = virtual_machine_family_core_quota_instance.to_dict()
# create an instance of VirtualMachineFamilyCoreQuota from a dict
virtual_machine_family_core_quota_from_dict = VirtualMachineFamilyCoreQuota.from_dict(virtual_machine_family_core_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


