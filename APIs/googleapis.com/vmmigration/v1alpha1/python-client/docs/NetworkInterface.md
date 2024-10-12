# NetworkInterface

NetworkInterface represents a NIC of a VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_ip** | **str** | The external IP to define in the NIC. | [optional] 
**internal_ip** | **str** | The internal IP to define in the NIC. The formats accepted are: &#x60;ephemeral&#x60; \\ ipv4 address \\ a named address resource full path. | [optional] 
**network** | **str** | The network to connect the NIC to. | [optional] 
**subnetwork** | **str** | The subnetwork to connect the NIC to. | [optional] 

## Example

```python
from openapi_client.models.network_interface import NetworkInterface

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterface from a JSON string
network_interface_instance = NetworkInterface.from_json(json)
# print the JSON string representation of the object
print(NetworkInterface.to_json())

# convert the object into a dict
network_interface_dict = network_interface_instance.to_dict()
# create an instance of NetworkInterface from a dict
network_interface_from_dict = NetworkInterface.from_dict(network_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


