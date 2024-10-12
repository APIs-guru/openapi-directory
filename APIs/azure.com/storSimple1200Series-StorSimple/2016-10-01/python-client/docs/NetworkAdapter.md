# NetworkAdapter

Represents a networkAdapter in a particular node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dhcp_status** | **str** | Represents state of DHCP. | 
**i_pv4_info** | [**IPConfig**](IPConfig.md) |  | [optional] 
**i_pv6_info** | [**IPConfig**](IPConfig.md) |  | [optional] 
**link_speed** | **int** | The speed of the network adapter. | [optional] 
**network_adapter_name** | **str** | The name of the network adapter. | 

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


