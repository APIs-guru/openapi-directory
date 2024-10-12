# VirtualMachineDetails

Details of the backing virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_known_power_state** | **str** | Last known compute power state captured in DTL | [optional] [readonly] 
**private_ip_address** | **str** | PrivateIp address of the compute VM | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the Dtl VM | [optional] [readonly] 
**rdp_authority** | **str** | Connection information for Windows | [optional] [readonly] 
**ssh_authority** | **str** | Connection information for Linux | [optional] [readonly] 
**user_name** | **str** | Compute VM login user name | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_details import VirtualMachineDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineDetails from a JSON string
virtual_machine_details_instance = VirtualMachineDetails.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineDetails.to_json())

# convert the object into a dict
virtual_machine_details_dict = virtual_machine_details_instance.to_dict()
# create an instance of VirtualMachineDetails from a dict
virtual_machine_details_from_dict = VirtualMachineDetails.from_dict(virtual_machine_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


