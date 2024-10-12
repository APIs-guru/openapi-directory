# NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200Response

Response for list ip configurations API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200ResponseValueInner]**](NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200ResponseValueInner.md) | A list of ip configurations. | [optional] 

## Example

```python
from openapi_client.models.network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response import NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200Response

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200Response from a JSON string
network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response_instance = NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200Response.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200Response.to_json())

# convert the object into a dict
network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response_dict = network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response_instance.to_dict()
# create an instance of NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200Response from a dict
network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response_from_dict = NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200Response.from_dict(network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


