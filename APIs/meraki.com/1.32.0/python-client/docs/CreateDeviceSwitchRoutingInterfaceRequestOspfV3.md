# CreateDeviceSwitchRoutingInterfaceRequestOspfV3

The OSPFv3 routing settings of the interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | The OSPFv3 area to which this interface should belong. Can be either &#39;disabled&#39; or the identifier of an           existing OSPFv3 area. Defaults to &#39;disabled&#39;. | [optional] 
**cost** | **int** | The path cost for this interface. Defaults to 1, but can be increased up to 65535           to give lower priority. | [optional] 
**is_passive_enabled** | **bool** | When enabled, OSPFv3 will not run on the interface, but the subnet will still be advertised. | [optional] 

## Example

```python
from openapi_client.models.create_device_switch_routing_interface_request_ospf_v3 import CreateDeviceSwitchRoutingInterfaceRequestOspfV3

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeviceSwitchRoutingInterfaceRequestOspfV3 from a JSON string
create_device_switch_routing_interface_request_ospf_v3_instance = CreateDeviceSwitchRoutingInterfaceRequestOspfV3.from_json(json)
# print the JSON string representation of the object
print(CreateDeviceSwitchRoutingInterfaceRequestOspfV3.to_json())

# convert the object into a dict
create_device_switch_routing_interface_request_ospf_v3_dict = create_device_switch_routing_interface_request_ospf_v3_instance.to_dict()
# create an instance of CreateDeviceSwitchRoutingInterfaceRequestOspfV3 from a dict
create_device_switch_routing_interface_request_ospf_v3_from_dict = CreateDeviceSwitchRoutingInterfaceRequestOspfV3.from_dict(create_device_switch_routing_interface_request_ospf_v3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


