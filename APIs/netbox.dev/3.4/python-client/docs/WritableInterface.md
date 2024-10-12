# WritableInterface


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occupied** | **bool** |  | [optional] [readonly] 
**bridge** | **int** |  | [optional] 
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
**device** | **int** |  | 
**display** | **str** |  | [optional] [readonly] 
**duplex** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**l2vpn_termination** | **str** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**lag** | **int** |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**link_peers** | **List[Optional[str]]** |  Return the appropriate serializer for the link termination model.  | [optional] [readonly] 
**link_peers_type** | **str** |  | [optional] [readonly] 
**mac_address** | **str** |  | [optional] 
**mark_connected** | **bool** | Treat as if a cable is connected | [optional] 
**mgmt_only** | **bool** | This interface is used only for out-of-band management | [optional] 
**mode** | **str** |  | [optional] 
**module** | **int** |  | [optional] 
**mtu** | **int** |  | [optional] 
**name** | **str** |  | 
**parent** | **int** |  | [optional] 
**poe_mode** | **str** |  | [optional] 
**poe_type** | **str** |  | [optional] 
**rf_channel** | **str** |  | [optional] 
**rf_channel_frequency** | **float** |  | [optional] 
**rf_channel_width** | **float** |  | [optional] 
**rf_role** | **str** |  | [optional] 
**speed** | **int** |  | [optional] 
**tagged_vlans** | **List[int]** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tx_power** | **int** |  | [optional] 
**type** | **str** |  | 
**untagged_vlan** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vdcs** | **List[int]** |  | 
**vrf** | **int** |  | [optional] 
**wireless_lans** | **List[int]** |  | [optional] 
**wireless_link** | **int** |  | [optional] 
**wwn** | **str** | 64-bit World Wide Name | [optional] 

## Example

```python
from openapi_client.models.writable_interface import WritableInterface

# TODO update the JSON string below
json = "{}"
# create an instance of WritableInterface from a JSON string
writable_interface_instance = WritableInterface.from_json(json)
# print the JSON string representation of the object
print(WritableInterface.to_json())

# convert the object into a dict
writable_interface_dict = writable_interface_instance.to_dict()
# create an instance of WritableInterface from a dict
writable_interface_from_dict = WritableInterface.from_dict(writable_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


