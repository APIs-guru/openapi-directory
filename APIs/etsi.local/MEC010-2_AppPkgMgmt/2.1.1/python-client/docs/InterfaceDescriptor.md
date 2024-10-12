# InterfaceDescriptor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dst_ip_address** | **str** | If the interface type is IP, the destination address identifies the IP address of the destination. Only used for dstInterface. | [optional] 
**dst_mac_address** | **str** | If the interface type is MAC, the destination address identifies the MAC address of the destination. Only used for dstInterface. | [optional] 
**interface_type** | [**InterfaceType**](InterfaceType.md) |  | 
**src_mac_address** | **str** | If the interface type is MAC, the source address identifies the MAC address of the interface. | [optional] 
**tunnel_info** | [**TunnelInfo**](TunnelInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.interface_descriptor import InterfaceDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of InterfaceDescriptor from a JSON string
interface_descriptor_instance = InterfaceDescriptor.from_json(json)
# print the JSON string representation of the object
print(InterfaceDescriptor.to_json())

# convert the object into a dict
interface_descriptor_dict = interface_descriptor_instance.to_dict()
# create an instance of InterfaceDescriptor from a dict
interface_descriptor_from_dict = InterfaceDescriptor.from_dict(interface_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


