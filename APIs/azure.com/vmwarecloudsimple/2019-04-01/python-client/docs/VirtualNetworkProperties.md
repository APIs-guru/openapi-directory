# VirtualNetworkProperties

Properties of virtual network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_cloud_id** | **str** | The Private Cloud id | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_network_properties import VirtualNetworkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkProperties from a JSON string
virtual_network_properties_instance = VirtualNetworkProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkProperties.to_json())

# convert the object into a dict
virtual_network_properties_dict = virtual_network_properties_instance.to_dict()
# create an instance of VirtualNetworkProperties from a dict
virtual_network_properties_from_dict = VirtualNetworkProperties.from_dict(virtual_network_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


