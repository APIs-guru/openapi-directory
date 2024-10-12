# InMageAzureV2EnableProtectionInput

VMware Azure specific enable protection input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disks_to_include** | **List[str]** | The disks to include list. | [optional] 
**enable_rdp_on_target_option** | **str** | The selected option to enable RDP\\SSH on target vm after failover. String value of {SrsDataContract.EnableRDPOnTargetOption} enum. | [optional] 
**log_storage_account_id** | **str** | The storage account to be used for logging during replication. | [optional] 
**master_target_id** | **str** | The Master target Id. | [optional] 
**multi_vm_group_id** | **str** | The multi vm group Id. | [optional] 
**multi_vm_group_name** | **str** | The multi vm group name. | [optional] 
**process_server_id** | **str** | The Process Server Id. | [optional] 
**run_as_account_id** | **str** | The CS account Id. | [optional] 
**storage_account_id** | **str** | The storage account name. | 
**target_azure_network_id** | **str** | The selected target Azure network Id. | [optional] 
**target_azure_subnet_id** | **str** | The selected target Azure subnet Id. | [optional] 
**target_azure_v1_resource_group_id** | **str** | The Id of the target resource group (for classic deployment) in which the failover VM is to be created. | [optional] 
**target_azure_v2_resource_group_id** | **str** | The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created. | [optional] 
**target_azure_vm_name** | **str** | The target azure Vm Name. | [optional] 
**use_managed_disks** | **str** | A value indicating whether managed disks should be used during failover. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_enable_protection_input import InMageAzureV2EnableProtectionInput

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2EnableProtectionInput from a JSON string
in_mage_azure_v2_enable_protection_input_instance = InMageAzureV2EnableProtectionInput.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2EnableProtectionInput.to_json())

# convert the object into a dict
in_mage_azure_v2_enable_protection_input_dict = in_mage_azure_v2_enable_protection_input_instance.to_dict()
# create an instance of InMageAzureV2EnableProtectionInput from a dict
in_mage_azure_v2_enable_protection_input_from_dict = InMageAzureV2EnableProtectionInput.from_dict(in_mage_azure_v2_enable_protection_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


