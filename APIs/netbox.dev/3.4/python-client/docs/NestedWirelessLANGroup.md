# NestedWirelessLANGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 
**wirelesslan_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_wireless_lan_group import NestedWirelessLANGroup

# TODO update the JSON string below
json = "{}"
# create an instance of NestedWirelessLANGroup from a JSON string
nested_wireless_lan_group_instance = NestedWirelessLANGroup.from_json(json)
# print the JSON string representation of the object
print(NestedWirelessLANGroup.to_json())

# convert the object into a dict
nested_wireless_lan_group_dict = nested_wireless_lan_group_instance.to_dict()
# create an instance of NestedWirelessLANGroup from a dict
nested_wireless_lan_group_from_dict = NestedWirelessLANGroup.from_dict(nested_wireless_lan_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


