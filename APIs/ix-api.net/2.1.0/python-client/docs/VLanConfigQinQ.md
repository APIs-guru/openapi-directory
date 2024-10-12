# VLanConfigQinQ


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inner_vlan** | **int** | The inner VLAN id.  | 
**outer_vlan** | **int** | The outer VLAN id.  | 
**outer_vlan_ethertype** | **str** | The ethertype of the outer tag in hexadecimal notation. | [optional] [default to '0x8100']
**vlan_type** | **str** |  | 

## Example

```python
from openapi_client.models.v_lan_config_qin_q import VLanConfigQinQ

# TODO update the JSON string below
json = "{}"
# create an instance of VLanConfigQinQ from a JSON string
v_lan_config_qin_q_instance = VLanConfigQinQ.from_json(json)
# print the JSON string representation of the object
print(VLanConfigQinQ.to_json())

# convert the object into a dict
v_lan_config_qin_q_dict = v_lan_config_qin_q_instance.to_dict()
# create an instance of VLanConfigQinQ from a dict
v_lan_config_qin_q_from_dict = VLanConfigQinQ.from_dict(v_lan_config_qin_q_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


