# IPConfigurationPropertiesFormat

Properties of IPConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_ip_address** | **str** | Gets or sets the privateIPAddress of the IP Configuration | [optional] 
**private_ip_allocation_method** | **str** | Gets or sets PrivateIP allocation method (Static/Dynamic) | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**public_ip_address** | [**PublicIPAddress**](PublicIPAddress.md) |  | [optional] 
**subnet** | [**Subnet**](Subnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.ip_configuration_properties_format import IPConfigurationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of IPConfigurationPropertiesFormat from a JSON string
ip_configuration_properties_format_instance = IPConfigurationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(IPConfigurationPropertiesFormat.to_json())

# convert the object into a dict
ip_configuration_properties_format_dict = ip_configuration_properties_format_instance.to_dict()
# create an instance of IPConfigurationPropertiesFormat from a dict
ip_configuration_properties_format_from_dict = IPConfigurationPropertiesFormat.from_dict(ip_configuration_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


