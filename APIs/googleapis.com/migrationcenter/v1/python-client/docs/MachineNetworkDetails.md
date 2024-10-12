# MachineNetworkDetails

Details of network adapters and settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adapters** | [**NetworkAdapterList**](NetworkAdapterList.md) |  | [optional] 
**primary_ip_address** | **str** | The primary IP address of the machine. | [optional] 
**primary_mac_address** | **str** | MAC address of the machine. This property is used to uniqly identify the machine. | [optional] 
**public_ip_address** | **str** | The public IP address of the machine. | [optional] 

## Example

```python
from openapi_client.models.machine_network_details import MachineNetworkDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MachineNetworkDetails from a JSON string
machine_network_details_instance = MachineNetworkDetails.from_json(json)
# print the JSON string representation of the object
print(MachineNetworkDetails.to_json())

# convert the object into a dict
machine_network_details_dict = machine_network_details_instance.to_dict()
# create an instance of MachineNetworkDetails from a dict
machine_network_details_from_dict = MachineNetworkDetails.from_dict(machine_network_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


