# IaasVMRecoveryPoint

Azure VM (also known as IaaS VM) workload-specific backup copy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_instant_ilr_session_active** | **bool** | Answer to the question - Is the session to recover items from this backup copy still active. | [optional] 
**is_source_vm_encrypted** | **bool** | Identifies whether the VM was encrypted when the backup copy is created. | [optional] 
**key_and_secret** | [**KeyAndSecretDetails**](KeyAndSecretDetails.md) |  | [optional] 
**recovery_point_additional_info** | **str** | Additional information associated with this backup copy. | [optional] 
**recovery_point_time** | **datetime** | The date and time when the backup copy was created. | [optional] 
**recovery_point_type** | **str** | Type of the backup copy. | [optional] 
**source_vm_storage_type** | **str** | The storage type for the VM whose backup copy was created. | [optional] 

## Example

```python
from openapi_client.models.iaas_vm_recovery_point import IaasVMRecoveryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of IaasVMRecoveryPoint from a JSON string
iaas_vm_recovery_point_instance = IaasVMRecoveryPoint.from_json(json)
# print the JSON string representation of the object
print(IaasVMRecoveryPoint.to_json())

# convert the object into a dict
iaas_vm_recovery_point_dict = iaas_vm_recovery_point_instance.to_dict()
# create an instance of IaasVMRecoveryPoint from a dict
iaas_vm_recovery_point_from_dict = IaasVMRecoveryPoint.from_dict(iaas_vm_recovery_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


