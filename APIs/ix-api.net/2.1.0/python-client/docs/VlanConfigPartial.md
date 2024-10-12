# VlanConfigPartial

The vlan configuration defines how the service is made available on the connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vlan** | **int** | A VLAN tag  | [optional] 
**vlan_ethertype** | **str** | The ethertype of the vlan in hexadecimal notation. | [optional] [default to '0x8100']
**vlan_type** | **str** |  | 
**inner_vlan** | **int** | The inner VLAN id.  | [optional] 
**outer_vlan** | **int** | The outer VLAN id.  | [optional] 
**outer_vlan_ethertype** | **str** | The ethertype of the outer tag in hexadecimal notation. | [optional] [default to '0x8100']

## Example

```python
from openapi_client.models.vlan_config_partial import VlanConfigPartial

# TODO update the JSON string below
json = "{}"
# create an instance of VlanConfigPartial from a JSON string
vlan_config_partial_instance = VlanConfigPartial.from_json(json)
# print the JSON string representation of the object
print(VlanConfigPartial.to_json())

# convert the object into a dict
vlan_config_partial_dict = vlan_config_partial_instance.to_dict()
# create an instance of VlanConfigPartial from a dict
vlan_config_partial_from_dict = VlanConfigPartial.from_dict(vlan_config_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


