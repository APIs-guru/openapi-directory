# NetworkInterfacesGetVirtualMachineScaleSetIpConfiguration200Response

IPConfiguration in a network interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | **object** |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.network_interfaces_get_virtual_machine_scale_set_ip_configuration200_response import NetworkInterfacesGetVirtualMachineScaleSetIpConfiguration200Response

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfacesGetVirtualMachineScaleSetIpConfiguration200Response from a JSON string
network_interfaces_get_virtual_machine_scale_set_ip_configuration200_response_instance = NetworkInterfacesGetVirtualMachineScaleSetIpConfiguration200Response.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfacesGetVirtualMachineScaleSetIpConfiguration200Response.to_json())

# convert the object into a dict
network_interfaces_get_virtual_machine_scale_set_ip_configuration200_response_dict = network_interfaces_get_virtual_machine_scale_set_ip_configuration200_response_instance.to_dict()
# create an instance of NetworkInterfacesGetVirtualMachineScaleSetIpConfiguration200Response from a dict
network_interfaces_get_virtual_machine_scale_set_ip_configuration200_response_from_dict = NetworkInterfacesGetVirtualMachineScaleSetIpConfiguration200Response.from_dict(network_interfaces_get_virtual_machine_scale_set_ip_configuration200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


