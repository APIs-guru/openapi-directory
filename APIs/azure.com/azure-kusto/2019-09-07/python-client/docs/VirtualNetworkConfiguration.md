# VirtualNetworkConfiguration

A class that contains virtual network definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_management_public_ip_id** | **str** | Data management&#39;s service public IP address resource id. | 
**engine_public_ip_id** | **str** | Engine service&#39;s public IP address resource id. | 
**subnet_id** | **str** | The subnet resource id. | 

## Example

```python
from openapi_client.models.virtual_network_configuration import VirtualNetworkConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkConfiguration from a JSON string
virtual_network_configuration_instance = VirtualNetworkConfiguration.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkConfiguration.to_json())

# convert the object into a dict
virtual_network_configuration_dict = virtual_network_configuration_instance.to_dict()
# create an instance of VirtualNetworkConfiguration from a dict
virtual_network_configuration_from_dict = VirtualNetworkConfiguration.from_dict(virtual_network_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


