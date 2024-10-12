# VLanConfigDot1Q


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vlan** | **int** | A VLAN tag  | 
**vlan_ethertype** | **str** | The ethertype of the vlan in hexadecimal notation. | [optional] [default to '0x8100']
**vlan_type** | **str** |  | 

## Example

```python
from openapi_client.models.v_lan_config_dot1_q import VLanConfigDot1Q

# TODO update the JSON string below
json = "{}"
# create an instance of VLanConfigDot1Q from a JSON string
v_lan_config_dot1_q_instance = VLanConfigDot1Q.from_json(json)
# print the JSON string representation of the object
print(VLanConfigDot1Q.to_json())

# convert the object into a dict
v_lan_config_dot1_q_dict = v_lan_config_dot1_q_instance.to_dict()
# create an instance of VLanConfigDot1Q from a dict
v_lan_config_dot1_q_from_dict = VLanConfigDot1Q.from_dict(v_lan_config_dot1_q_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


