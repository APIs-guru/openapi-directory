# NetworkAdapters

Represents the network adapter on device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interface_id** | **str** | The ID of the network adapter. | 
**is_default** | **bool** | Value indicating whether this instance is default. | [optional] 
**iscsi_and_cloud_status** | **str** | Value indicating cloud and ISCSI status of network adapter. | 
**mode** | **str** | The mode of network adapter, either IPv4, IPv6 or both. | 
**net_interface_status** | **str** | Value indicating status of network adapter. | 
**nic_ipv4_settings** | [**NicIPv4**](NicIPv4.md) |  | [optional] 
**nic_ipv6_settings** | [**NicIPv6**](NicIPv6.md) |  | [optional] 
**speed** | **int** | The speed of the network adapter. | [optional] 

## Example

```python
from openapi_client.models.network_adapters import NetworkAdapters

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkAdapters from a JSON string
network_adapters_instance = NetworkAdapters.from_json(json)
# print the JSON string representation of the object
print(NetworkAdapters.to_json())

# convert the object into a dict
network_adapters_dict = network_adapters_instance.to_dict()
# create an instance of NetworkAdapters from a dict
network_adapters_from_dict = NetworkAdapters.from_dict(network_adapters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


