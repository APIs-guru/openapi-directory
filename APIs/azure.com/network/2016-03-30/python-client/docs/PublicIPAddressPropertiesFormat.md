# PublicIPAddressPropertiesFormat

PublicIpAddress properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_settings** | [**PublicIPAddressDnsSettings**](PublicIPAddressDnsSettings.md) |  | [optional] 
**idle_timeout_in_minutes** | **int** | Gets or sets the idle timeout of the public IP address | [optional] 
**ip_address** | **str** |  | [optional] 
**ip_configuration** | [**IPConfiguration**](IPConfiguration.md) |  | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**public_ip_address_version** | **str** | Gets or sets PublicIP address version (IPv4/IPv6) | [optional] 
**public_ip_allocation_method** | **str** | Gets or sets PublicIP allocation method (Static/Dynamic) | [optional] 
**resource_guid** | **str** | Gets or sets resource GUID property of the PublicIP resource | [optional] 

## Example

```python
from openapi_client.models.public_ip_address_properties_format import PublicIPAddressPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPAddressPropertiesFormat from a JSON string
public_ip_address_properties_format_instance = PublicIPAddressPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(PublicIPAddressPropertiesFormat.to_json())

# convert the object into a dict
public_ip_address_properties_format_dict = public_ip_address_properties_format_instance.to_dict()
# create an instance of PublicIPAddressPropertiesFormat from a dict
public_ip_address_properties_format_from_dict = PublicIPAddressPropertiesFormat.from_dict(public_ip_address_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


