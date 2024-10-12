# VLanConfigPortPartial

A Port vlan configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vlan_type** | **str** |  | 

## Example

```python
from openapi_client.models.v_lan_config_port_partial import VLanConfigPortPartial

# TODO update the JSON string below
json = "{}"
# create an instance of VLanConfigPortPartial from a JSON string
v_lan_config_port_partial_instance = VLanConfigPortPartial.from_json(json)
# print the JSON string representation of the object
print(VLanConfigPortPartial.to_json())

# convert the object into a dict
v_lan_config_port_partial_dict = v_lan_config_port_partial_instance.to_dict()
# create an instance of VLanConfigPortPartial from a dict
v_lan_config_port_partial_from_dict = VLanConfigPortPartial.from_dict(v_lan_config_port_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


