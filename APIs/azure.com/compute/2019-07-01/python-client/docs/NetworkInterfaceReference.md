# NetworkInterfaceReference

Describes a network interface reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NetworkInterfaceReferenceProperties**](NetworkInterfaceReferenceProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.network_interface_reference import NetworkInterfaceReference

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceReference from a JSON string
network_interface_reference_instance = NetworkInterfaceReference.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceReference.to_json())

# convert the object into a dict
network_interface_reference_dict = network_interface_reference_instance.to_dict()
# create an instance of NetworkInterfaceReference from a dict
network_interface_reference_from_dict = NetworkInterfaceReference.from_dict(network_interface_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


