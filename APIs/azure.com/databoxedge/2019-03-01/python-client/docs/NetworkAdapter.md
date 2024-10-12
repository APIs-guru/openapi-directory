# NetworkAdapter

Represents the networkAdapter on a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adapter_id** | **str** | Instance ID of network adapter. | [optional] [readonly] 
**adapter_position** | [**NetworkAdapterPosition**](NetworkAdapterPosition.md) |  | [optional] 
**dhcp_status** | **str** | Value indicating whether this adapter has DHCP enabled. | [optional] 
**dns_servers** | **List[str]** | The list of DNS Servers of the device. | [optional] [readonly] 
**index** | **int** | Logical index of the adapter. | [optional] [readonly] 
**ipv4_configuration** | [**Ipv4Config**](Ipv4Config.md) |  | [optional] 
**ipv6_configuration** | [**Ipv6Config**](Ipv6Config.md) |  | [optional] 
**ipv6_link_local_address** | **str** | The IPv6 local address. | [optional] [readonly] 
**label** | **str** | Hardware label for the adapter. | [optional] [readonly] 
**link_speed** | **int** | Link speed. | [optional] [readonly] 
**mac_address** | **str** | MAC address. | [optional] [readonly] 
**network_adapter_name** | **str** | Network adapter name. | [optional] [readonly] 
**node_id** | **str** | Node ID of the network adapter. | [optional] [readonly] 
**rdma_status** | **str** | Value indicating whether this adapter is RDMA capable. | [optional] 
**status** | **str** | Value indicating whether this adapter is valid. | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_adapter import NetworkAdapter

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkAdapter from a JSON string
network_adapter_instance = NetworkAdapter.from_json(json)
# print the JSON string representation of the object
print(NetworkAdapter.to_json())

# convert the object into a dict
network_adapter_dict = network_adapter_instance.to_dict()
# create an instance of NetworkAdapter from a dict
network_adapter_from_dict = NetworkAdapter.from_dict(network_adapter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


