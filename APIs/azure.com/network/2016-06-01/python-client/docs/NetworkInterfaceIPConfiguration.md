# NetworkInterfaceIPConfiguration

IPConfiguration in a NetworkInterface

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**NetworkInterfaceIPConfigurationPropertiesFormat**](NetworkInterfaceIPConfigurationPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.network_interface_ip_configuration import NetworkInterfaceIPConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceIPConfiguration from a JSON string
network_interface_ip_configuration_instance = NetworkInterfaceIPConfiguration.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceIPConfiguration.to_json())

# convert the object into a dict
network_interface_ip_configuration_dict = network_interface_ip_configuration_instance.to_dict()
# create an instance of NetworkInterfaceIPConfiguration from a dict
network_interface_ip_configuration_from_dict = NetworkInterfaceIPConfiguration.from_dict(network_interface_ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


