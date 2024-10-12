# PublicIpAddressPropertiesFormat

PublicIpAddress properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_settings** | [**PublicIpAddressDnsSettings**](PublicIpAddressDnsSettings.md) |  | [optional] 
**idle_timeout_in_minutes** | **int** | Gets or sets the idle timeout of the public IP address | [optional] 
**ip_address** | **str** | Gets the assigned public IP address | [optional] 
**ip_configuration** | [**SubResource**](SubResource.md) |  | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**public_ip_allocation_method** | **str** | Gets or sets PublicIP allocation method (Static/Dynamic) | 
**resource_guid** | **str** | Gets or sets resource guid property of the PublicIP resource | [optional] 

## Example

```python
from openapi_client.models.public_ip_address_properties_format import PublicIpAddressPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIpAddressPropertiesFormat from a JSON string
public_ip_address_properties_format_instance = PublicIpAddressPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(PublicIpAddressPropertiesFormat.to_json())

# convert the object into a dict
public_ip_address_properties_format_dict = public_ip_address_properties_format_instance.to_dict()
# create an instance of PublicIpAddressPropertiesFormat from a dict
public_ip_address_properties_format_from_dict = PublicIpAddressPropertiesFormat.from_dict(public_ip_address_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


