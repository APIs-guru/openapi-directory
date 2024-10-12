# NetworkInterfaceReferenceProperties

Describes a network interface reference properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **bool** | Specifies the primary network interface in case the virtual machine has more than 1 network interface. | [optional] 

## Example

```python
from openapi_client.models.network_interface_reference_properties import NetworkInterfaceReferenceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceReferenceProperties from a JSON string
network_interface_reference_properties_instance = NetworkInterfaceReferenceProperties.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceReferenceProperties.to_json())

# convert the object into a dict
network_interface_reference_properties_dict = network_interface_reference_properties_instance.to_dict()
# create an instance of NetworkInterfaceReferenceProperties from a dict
network_interface_reference_properties_from_dict = NetworkInterfaceReferenceProperties.from_dict(network_interface_reference_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


