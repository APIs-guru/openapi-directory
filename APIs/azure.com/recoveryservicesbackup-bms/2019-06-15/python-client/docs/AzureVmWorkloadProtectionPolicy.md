# AzureVmWorkloadProtectionPolicy

Azure VM (Mercury) workload-specific backup policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**make_policy_consistent** | **bool** | Fix the policy inconsistency | [optional] 
**settings** | [**Settings**](Settings.md) |  | [optional] 
**sub_protection_policy** | [**List[SubProtectionPolicy]**](SubProtectionPolicy.md) | List of sub-protection policies which includes schedule and retention | [optional] 
**work_load_type** | **str** | Type of workload for the backup management | [optional] 

## Example

```python
from openapi_client.models.azure_vm_workload_protection_policy import AzureVmWorkloadProtectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVmWorkloadProtectionPolicy from a JSON string
azure_vm_workload_protection_policy_instance = AzureVmWorkloadProtectionPolicy.from_json(json)
# print the JSON string representation of the object
print(AzureVmWorkloadProtectionPolicy.to_json())

# convert the object into a dict
azure_vm_workload_protection_policy_dict = azure_vm_workload_protection_policy_instance.to_dict()
# create an instance of AzureVmWorkloadProtectionPolicy from a dict
azure_vm_workload_protection_policy_from_dict = AzureVmWorkloadProtectionPolicy.from_dict(azure_vm_workload_protection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


