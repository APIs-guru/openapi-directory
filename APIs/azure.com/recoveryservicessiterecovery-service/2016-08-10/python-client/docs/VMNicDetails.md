# VMNicDetails

Hyper V VM network details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address_type** | **str** | Ip address type. | [optional] 
**nic_id** | **str** | The nic Id. | [optional] 
**primary_nic_static_ip_address** | **str** | Primary nic static IP address. | [optional] 
**recovery_nic_ip_address_type** | **str** | IP allocation type for recovery VM. | [optional] 
**recovery_vm_network_id** | **str** | Recovery VM network Id. | [optional] 
**recovery_vm_subnet_name** | **str** | Recovery VM subnet name. | [optional] 
**replica_nic_id** | **str** | The replica nic Id. | [optional] 
**replica_nic_static_ip_address** | **str** | Replica nic static IP address. | [optional] 
**selection_type** | **str** | Selection type for failover. | [optional] 
**source_nic_arm_id** | **str** | The source nic ARM Id. | [optional] 
**v_m_network_name** | **str** | VM network name. | [optional] 
**v_m_subnet_name** | **str** | VM subnet name. | [optional] 

## Example

```python
from openapi_client.models.vm_nic_details import VMNicDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VMNicDetails from a JSON string
vm_nic_details_instance = VMNicDetails.from_json(json)
# print the JSON string representation of the object
print(VMNicDetails.to_json())

# convert the object into a dict
vm_nic_details_dict = vm_nic_details_instance.to_dict()
# create an instance of VMNicDetails from a dict
vm_nic_details_from_dict = VMNicDetails.from_dict(vm_nic_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


