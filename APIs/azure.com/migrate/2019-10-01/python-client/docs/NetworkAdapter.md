# NetworkAdapter

A network adapter discovered on a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | User friendly name of the network adapter. | [optional] [readonly] 
**ip_addresses** | **List[str]** | List of IP Addresses on the network adapter. | [optional] [readonly] 
**mac_address** | **str** | MAC Address of the network adapter. | [optional] [readonly] 

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


