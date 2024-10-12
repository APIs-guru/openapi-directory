# NetworkInterface

A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_configs** | [**List[AccessConfig]**](AccessConfig.md) | An array of configurations for this interface. This specifies how this interface is configured to interact with other network services. | [optional] 
**network** | **str** | Name the Network resource to which this interface applies. | [optional] 
**network_ip** | **str** | An optional IPV4 internal network address to assign to the instance for this network interface. | [optional] 

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


