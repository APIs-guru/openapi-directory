# VirtualMachineNetworkDetails

Details of network adapters and settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_gw** | **str** | Default gateway address. | [optional] 
**network_adapters** | [**NetworkAdapterList**](NetworkAdapterList.md) |  | [optional] 
**primary_ip_address** | **str** | IP address of the machine. | [optional] 
**primary_mac_address** | **str** | MAC address of the machine. This property is used to uniqly identify the machine. | [optional] 
**public_ip_address** | **str** | Public IP address of the machine. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_network_details import VirtualMachineNetworkDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineNetworkDetails from a JSON string
virtual_machine_network_details_instance = VirtualMachineNetworkDetails.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineNetworkDetails.to_json())

# convert the object into a dict
virtual_machine_network_details_dict = virtual_machine_network_details_instance.to_dict()
# create an instance of VirtualMachineNetworkDetails from a dict
virtual_machine_network_details_from_dict = VirtualMachineNetworkDetails.from_dict(virtual_machine_network_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


