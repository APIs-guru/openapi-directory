# NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200ResponseValueInner

IPConfiguration in a network interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response_value_inner import NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200ResponseValueInner from a JSON string
network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response_value_inner_instance = NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200ResponseValueInner.to_json())

# convert the object into a dict
network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response_value_inner_dict = network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response_value_inner_instance.to_dict()
# create an instance of NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200ResponseValueInner from a dict
network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response_value_inner_from_dict = NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200ResponseValueInner.from_dict(network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


