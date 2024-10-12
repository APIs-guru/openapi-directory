# VirtualMachineScaleSetUpdatePublicIPAddressConfiguration

Describes a virtual machines scale set IP Configuration's PublicIPAddress configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The publicIP address configuration name. | [optional] 
**properties** | [**VirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties**](VirtualMachineScaleSetUpdatePublicIPAddressConfigurationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_update_public_ip_address_configuration import VirtualMachineScaleSetUpdatePublicIPAddressConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetUpdatePublicIPAddressConfiguration from a JSON string
virtual_machine_scale_set_update_public_ip_address_configuration_instance = VirtualMachineScaleSetUpdatePublicIPAddressConfiguration.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetUpdatePublicIPAddressConfiguration.to_json())

# convert the object into a dict
virtual_machine_scale_set_update_public_ip_address_configuration_dict = virtual_machine_scale_set_update_public_ip_address_configuration_instance.to_dict()
# create an instance of VirtualMachineScaleSetUpdatePublicIPAddressConfiguration from a dict
virtual_machine_scale_set_update_public_ip_address_configuration_from_dict = VirtualMachineScaleSetUpdatePublicIPAddressConfiguration.from_dict(virtual_machine_scale_set_update_public_ip_address_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


