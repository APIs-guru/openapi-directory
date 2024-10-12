# VMNicInputDetails

Hyper V VM network input details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_accelerated_networking_on_recovery** | **bool** | Whether the NIC has accelerated networking enabled. | [optional] 
**enable_accelerated_networking_on_tfo** | **bool** | Whether the test NIC has accelerated networking enabled. | [optional] 
**nic_id** | **str** | The nic Id. | [optional] 
**recovery_lb_backend_address_pool_ids** | **List[str]** | The target backend address pools for the NIC. | [optional] 
**recovery_network_security_group_id** | **str** | The id of the NSG associated with the NIC. | [optional] 
**recovery_public_ip_address_id** | **str** | The id of the public IP address resource associated with the NIC. | [optional] 
**recovery_vm_subnet_name** | **str** | Recovery VM subnet name. | [optional] 
**replica_nic_static_ip_address** | **str** | Replica nic static IP address. | [optional] 
**selection_type** | **str** | Selection type for failover. | [optional] 
**tfo_ip_configs** | [**List[IPConfig]**](IPConfig.md) | The IP configurations to be used by NIC during test failover. | [optional] 
**tfo_network_security_group_id** | **str** | The NSG to be used by NIC during test failover. | [optional] 
**tfo_vm_subnet_name** | **str** | The subnet to be used by NIC during test failover. | [optional] 

## Example

```python
from openapi_client.models.vm_nic_input_details import VMNicInputDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VMNicInputDetails from a JSON string
vm_nic_input_details_instance = VMNicInputDetails.from_json(json)
# print the JSON string representation of the object
print(VMNicInputDetails.to_json())

# convert the object into a dict
vm_nic_input_details_dict = vm_nic_input_details_instance.to_dict()
# create an instance of VMNicInputDetails from a dict
vm_nic_input_details_from_dict = VMNicInputDetails.from_dict(vm_nic_input_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


