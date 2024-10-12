# VmStateDetails

Details about the state of the reference virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_known_power_state** | **str** | Last known compute power state captured in DTL | [optional] [readonly] 
**power_state** | **str** | The power state of the reference virtual machine. | [optional] [readonly] 
**rdp_authority** | **str** | The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol). | [optional] [readonly] 
**ssh_authority** | **str** | The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vm_state_details import VmStateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VmStateDetails from a JSON string
vm_state_details_instance = VmStateDetails.from_json(json)
# print the JSON string representation of the object
print(VmStateDetails.to_json())

# convert the object into a dict
vm_state_details_dict = vm_state_details_instance.to_dict()
# create an instance of VmStateDetails from a dict
vm_state_details_from_dict = VmStateDetails.from_dict(vm_state_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


