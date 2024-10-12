# VLanConfigDot1QPartial

A Dot1Q vlan configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vlan** | **int** | A VLAN tag  | [optional] 
**vlan_ethertype** | **str** | The ethertype of the vlan in hexadecimal notation. | [optional] [default to '0x8100']
**vlan_type** | **str** |  | 

## Example

```python
from openapi_client.models.v_lan_config_dot1_q_partial import VLanConfigDot1QPartial

# TODO update the JSON string below
json = "{}"
# create an instance of VLanConfigDot1QPartial from a JSON string
v_lan_config_dot1_q_partial_instance = VLanConfigDot1QPartial.from_json(json)
# print the JSON string representation of the object
print(VLanConfigDot1QPartial.to_json())

# convert the object into a dict
v_lan_config_dot1_q_partial_dict = v_lan_config_dot1_q_partial_instance.to_dict()
# create an instance of VLanConfigDot1QPartial from a dict
v_lan_config_dot1_q_partial_from_dict = VLanConfigDot1QPartial.from_dict(v_lan_config_dot1_q_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


