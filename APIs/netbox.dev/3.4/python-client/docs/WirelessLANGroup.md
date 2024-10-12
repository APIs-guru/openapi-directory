# WirelessLANGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**parent** | [**NestedWirelessLANGroup**](NestedWirelessLANGroup.md) |  | [optional] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**wirelesslan_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.wireless_lan_group import WirelessLANGroup

# TODO update the JSON string below
json = "{}"
# create an instance of WirelessLANGroup from a JSON string
wireless_lan_group_instance = WirelessLANGroup.from_json(json)
# print the JSON string representation of the object
print(WirelessLANGroup.to_json())

# convert the object into a dict
wireless_lan_group_dict = wireless_lan_group_instance.to_dict()
# create an instance of WirelessLANGroup from a dict
wireless_lan_group_from_dict = WirelessLANGroup.from_dict(wireless_lan_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


