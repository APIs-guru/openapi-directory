# VirtualNetwork

Virtual Network resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated | [optional] 
**properties** | [**VirtualNetworkPropertiesFormat**](VirtualNetworkPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_network import VirtualNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetwork from a JSON string
virtual_network_instance = VirtualNetwork.from_json(json)
# print the JSON string representation of the object
print(VirtualNetwork.to_json())

# convert the object into a dict
virtual_network_dict = virtual_network_instance.to_dict()
# create an instance of VirtualNetwork from a dict
virtual_network_from_dict = VirtualNetwork.from_dict(virtual_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


