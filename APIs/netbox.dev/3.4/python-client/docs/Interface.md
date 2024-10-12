# Interface


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupied** | **bool** |  | [optional] [readonly] 
**bridge** | [**NestedInterface**](NestedInterface.md) |  | [optional] 
**cable** | [**NestedCable**](NestedCable.md) |  | [optional] 
**cable_end** | **str** |  | [optional] [readonly] 
**connected_endpoints** | **List[Optional[str]]** |  Return the appropriate serializer for the type of connected object.  | [optional] [readonly] 
**connected_endpoints_reachable** | **bool** |  | [optional] [readonly] 
**connected_endpoints_type** | **str** |  | [optional] [readonly] 
**count_fhrp_groups** | **int** |  | [optional] [readonly] 
**count_ipaddresses** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | [**NestedDevice**](NestedDevice.md) |  | 
**display** | **str** |  | [optional] [readonly] 
**duplex** | [**Duplex**](Duplex.md) |  | [optional] 
**enabled** | **bool** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**l2vpn_termination** | [**NestedL2VPNTermination**](NestedL2VPNTermination.md) |  | [optional] 
**label** | **str** | Physical label | [optional] 
**lag** | [**NestedInterface**](NestedInterface.md) |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**link_peers** | **List[Optional[str]]** |  Return the appropriate serializer for the link termination model.  | [optional] [readonly] 
**link_peers_type** | **str** |  | [optional] [readonly] 
**mac_address** | **str** |  | [optional] 
**mark_connected** | **bool** | Treat as if a cable is connected | [optional] 
**mgmt_only** | **bool** | This interface is used only for out-of-band management | [optional] 
**mode** | [**Mode**](Mode.md) |  | [optional] 
**module** | [**ComponentNestedModule**](ComponentNestedModule.md) |  | [optional] 
**mtu** | **int** |  | [optional] 
**name** | **str** |  | 
**parent** | [**NestedInterface**](NestedInterface.md) |  | [optional] 
**poe_mode** | [**PoeMode**](PoeMode.md) |  | [optional] 
**poe_type** | [**PoeType**](PoeType.md) |  | [optional] 
**rf_channel** | [**RfChannel**](RfChannel.md) |  | [optional] 
**rf_channel_frequency** | **float** |  | [optional] 
**rf_channel_width** | **float** |  | [optional] 
**rf_role** | [**RfRole**](RfRole.md) |  | [optional] 
**speed** | **int** |  | [optional] 
**tagged_vlans** | [**List[NestedVLAN]**](NestedVLAN.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tx_power** | **int** |  | [optional] 
**type** | [**Type3**](Type3.md) |  | 
**untagged_vlan** | [**NestedVLAN**](NestedVLAN.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vdcs** | [**List[NestedVirtualDeviceContext]**](NestedVirtualDeviceContext.md) |  | [optional] 
**vrf** | [**NestedVRF**](NestedVRF.md) |  | [optional] 
**wireless_lans** | [**List[NestedWirelessLAN]**](NestedWirelessLAN.md) |  | [optional] 
**wireless_link** | [**NestedWirelessLink**](NestedWirelessLink.md) |  | [optional] 
**wwn** | **str** | 64-bit World Wide Name | [optional] 

## Example

```python
from openapi_client.models.interface import Interface

# TODO update the JSON string below
json = "{}"
# create an instance of Interface from a JSON string
interface_instance = Interface.from_json(json)
# print the JSON string representation of the object
print(Interface.to_json())

# convert the object into a dict
interface_dict = interface_instance.to_dict()
# create an instance of Interface from a dict
interface_from_dict = Interface.from_dict(interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


