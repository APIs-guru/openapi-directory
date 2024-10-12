# NetworkInterface

Network details of the environment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_ip_address** | **str** | PrivateIp address of the Compute VM | [optional] [readonly] 
**rdp_authority** | **str** | Connection information for Windows | [optional] [readonly] 
**ssh_authority** | **str** | Connection information for Linux | [optional] [readonly] 
**username** | **str** | Username of the VM | [optional] [readonly] 

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


