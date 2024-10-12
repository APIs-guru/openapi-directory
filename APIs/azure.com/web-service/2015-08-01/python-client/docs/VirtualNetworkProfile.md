# VirtualNetworkProfile

Specification for using a virtual network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource id of the virtual network | [optional] 
**name** | **str** | Name of the virtual network (read-only) | [optional] 
**subnet** | **str** | Subnet within the virtual network | [optional] 
**type** | **str** | Resource type of the virtual network (read-only) | [optional] 

## Example

```python
from openapi_client.models.virtual_network_profile import VirtualNetworkProfile

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkProfile from a JSON string
virtual_network_profile_instance = VirtualNetworkProfile.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkProfile.to_json())

# convert the object into a dict
virtual_network_profile_dict = virtual_network_profile_instance.to_dict()
# create an instance of VirtualNetworkProfile from a dict
virtual_network_profile_from_dict = VirtualNetworkProfile.from_dict(virtual_network_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


