# NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200ResponseValueInner

A network interface in a resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.network_interfaces_list_virtual_machine_scale_set_network_interfaces200_response_value_inner import NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200ResponseValueInner from a JSON string
network_interfaces_list_virtual_machine_scale_set_network_interfaces200_response_value_inner_instance = NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200ResponseValueInner.to_json())

# convert the object into a dict
network_interfaces_list_virtual_machine_scale_set_network_interfaces200_response_value_inner_dict = network_interfaces_list_virtual_machine_scale_set_network_interfaces200_response_value_inner_instance.to_dict()
# create an instance of NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200ResponseValueInner from a dict
network_interfaces_list_virtual_machine_scale_set_network_interfaces200_response_value_inner_from_dict = NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200ResponseValueInner.from_dict(network_interfaces_list_virtual_machine_scale_set_network_interfaces200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


