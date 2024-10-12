# AzureVmWorkloadProtectedItemExtendedInfo

Additional information on Azure Workload for SQL specific backup item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oldest_recovery_point** | **datetime** | The oldest backup copy available for this backup item. | [optional] 
**policy_state** | **str** | Indicates consistency of policy object and policy applied to this backup item. | [optional] 
**recovery_point_count** | **int** | Number of backup copies available for this backup item. | [optional] 

## Example

```python
from openapi_client.models.azure_vm_workload_protected_item_extended_info import AzureVmWorkloadProtectedItemExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVmWorkloadProtectedItemExtendedInfo from a JSON string
azure_vm_workload_protected_item_extended_info_instance = AzureVmWorkloadProtectedItemExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(AzureVmWorkloadProtectedItemExtendedInfo.to_json())

# convert the object into a dict
azure_vm_workload_protected_item_extended_info_dict = azure_vm_workload_protected_item_extended_info_instance.to_dict()
# create an instance of AzureVmWorkloadProtectedItemExtendedInfo from a dict
azure_vm_workload_protected_item_extended_info_from_dict = AzureVmWorkloadProtectedItemExtendedInfo.from_dict(azure_vm_workload_protected_item_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


