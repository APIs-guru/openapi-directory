# VlanConfig

The vlan configuration defines how the service is made available on the connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vlan** | **int** | A VLAN tag  | 
**vlan_ethertype** | **str** | The ethertype of the vlan in hexadecimal notation. | [optional] [default to '0x8100']
**vlan_type** | **str** |  | 
**inner_vlan** | **int** | The inner VLAN id.  | 
**outer_vlan** | **int** | The outer VLAN id.  | 
**outer_vlan_ethertype** | **str** | The ethertype of the outer tag in hexadecimal notation. | [optional] [default to '0x8100']

## Example

```python
from openapi_client.models.vlan_config import VlanConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VlanConfig from a JSON string
vlan_config_instance = VlanConfig.from_json(json)
# print the JSON string representation of the object
print(VlanConfig.to_json())

# convert the object into a dict
vlan_config_dict = vlan_config_instance.to_dict()
# create an instance of VlanConfig from a dict
vlan_config_from_dict = VlanConfig.from_dict(vlan_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


