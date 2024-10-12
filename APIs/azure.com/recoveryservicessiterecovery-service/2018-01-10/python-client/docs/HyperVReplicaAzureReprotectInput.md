# HyperVReplicaAzureReprotectInput

Azure specific reprotect input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hv_host_vm_id** | **str** | The Hyper-V host Vm Id. | [optional] 
**log_storage_account_id** | **str** | The storage account to be used for logging during replication. | [optional] 
**os_type** | **str** | The OS type associated with vm. | [optional] 
**storage_account_id** | **str** | The storage account name. | [optional] 
**v_hdid** | **str** | The OS disk VHD id associated with vm. | [optional] 
**vm_name** | **str** | The Vm Name. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_azure_reprotect_input import HyperVReplicaAzureReprotectInput

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaAzureReprotectInput from a JSON string
hyper_v_replica_azure_reprotect_input_instance = HyperVReplicaAzureReprotectInput.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaAzureReprotectInput.to_json())

# convert the object into a dict
hyper_v_replica_azure_reprotect_input_dict = hyper_v_replica_azure_reprotect_input_instance.to_dict()
# create an instance of HyperVReplicaAzureReprotectInput from a dict
hyper_v_replica_azure_reprotect_input_from_dict = HyperVReplicaAzureReprotectInput.from_dict(hyper_v_replica_azure_reprotect_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


