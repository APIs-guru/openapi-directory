# NetworkInterfacesGetVirtualMachineScaleSetNetworkInterface200Response

A network interface in a resource group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | **object** |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_interfaces_get_virtual_machine_scale_set_network_interface200_response import NetworkInterfacesGetVirtualMachineScaleSetNetworkInterface200Response

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfacesGetVirtualMachineScaleSetNetworkInterface200Response from a JSON string
network_interfaces_get_virtual_machine_scale_set_network_interface200_response_instance = NetworkInterfacesGetVirtualMachineScaleSetNetworkInterface200Response.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfacesGetVirtualMachineScaleSetNetworkInterface200Response.to_json())

# convert the object into a dict
network_interfaces_get_virtual_machine_scale_set_network_interface200_response_dict = network_interfaces_get_virtual_machine_scale_set_network_interface200_response_instance.to_dict()
# create an instance of NetworkInterfacesGetVirtualMachineScaleSetNetworkInterface200Response from a dict
network_interfaces_get_virtual_machine_scale_set_network_interface200_response_from_dict = NetworkInterfacesGetVirtualMachineScaleSetNetworkInterface200Response.from_dict(network_interfaces_get_virtual_machine_scale_set_network_interface200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


