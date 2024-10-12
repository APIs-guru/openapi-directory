# BastionHostIPConfigurationPropertiesFormat

Properties of IP configuration of an Bastion Host.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_ip_allocation_method** | **str** | IP address allocation method. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**public_ip_address** | [**BastionHostIPConfigurationPropertiesFormatPublicIPAddress**](BastionHostIPConfigurationPropertiesFormatPublicIPAddress.md) |  | 
**subnet** | [**BastionHostIPConfigurationPropertiesFormatPublicIPAddress**](BastionHostIPConfigurationPropertiesFormatPublicIPAddress.md) |  | 

## Example

```python
from openapi_client.models.bastion_host_ip_configuration_properties_format import BastionHostIPConfigurationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of BastionHostIPConfigurationPropertiesFormat from a JSON string
bastion_host_ip_configuration_properties_format_instance = BastionHostIPConfigurationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(BastionHostIPConfigurationPropertiesFormat.to_json())

# convert the object into a dict
bastion_host_ip_configuration_properties_format_dict = bastion_host_ip_configuration_properties_format_instance.to_dict()
# create an instance of BastionHostIPConfigurationPropertiesFormat from a dict
bastion_host_ip_configuration_properties_format_from_dict = BastionHostIPConfigurationPropertiesFormat.from_dict(bastion_host_ip_configuration_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


