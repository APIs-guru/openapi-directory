# HyperVReplicaAzureEnableProtectionInput

Azure specific enable protection input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disks_to_include** | **List[str]** | The list of VHD IDs of disks to be protected. | [optional] 
**enable_rdp_on_target_option** | **str** | The selected option to enable RDP\\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum. | [optional] 
**hv_host_vm_id** | **str** | The Hyper-V host Vm Id. | [optional] 
**log_storage_account_id** | **str** | The storage account to be used for logging during replication. | [optional] 
**os_type** | **str** | The OS type associated with vm. | [optional] 
**target_azure_network_id** | **str** | The selected target Azure network Id. | [optional] 
**target_azure_subnet_id** | **str** | The selected target Azure subnet Id. | [optional] 
**target_azure_v1_resource_group_id** | **str** | The Id of the target resource group (for classic deployment) in which the failover VM is to be created. | [optional] 
**target_azure_v2_resource_group_id** | **str** | The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created. | [optional] 
**target_azure_vm_name** | **str** | The target azure Vm Name. | [optional] 
**target_storage_account_id** | **str** | The storage account name. | [optional] 
**use_managed_disks** | **str** | A value indicating whether managed disks should be used during failover. | [optional] 
**vhd_id** | **str** | The OS disk VHD id associated with vm. | [optional] 
**vm_name** | **str** | The Vm Name. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_azure_enable_protection_input import HyperVReplicaAzureEnableProtectionInput

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaAzureEnableProtectionInput from a JSON string
hyper_v_replica_azure_enable_protection_input_instance = HyperVReplicaAzureEnableProtectionInput.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaAzureEnableProtectionInput.to_json())

# convert the object into a dict
hyper_v_replica_azure_enable_protection_input_dict = hyper_v_replica_azure_enable_protection_input_instance.to_dict()
# create an instance of HyperVReplicaAzureEnableProtectionInput from a dict
hyper_v_replica_azure_enable_protection_input_from_dict = HyperVReplicaAzureEnableProtectionInput.from_dict(hyper_v_replica_azure_enable_protection_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


