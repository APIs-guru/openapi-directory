# VLANGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**max_vid** | **int** | Highest permissible ID of a child VLAN | [optional] 
**min_vid** | **int** | Lowest permissible ID of a child VLAN | [optional] 
**name** | **str** |  | 
**scope** | **object** |  | [optional] [readonly] 
**scope_id** | **int** |  | [optional] 
**scope_type** | **str** |  | [optional] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vlan_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.vlan_group import VLANGroup

# TODO update the JSON string below
json = "{}"
# create an instance of VLANGroup from a JSON string
vlan_group_instance = VLANGroup.from_json(json)
# print the JSON string representation of the object
print(VLANGroup.to_json())

# convert the object into a dict
vlan_group_dict = vlan_group_instance.to_dict()
# create an instance of VLANGroup from a dict
vlan_group_from_dict = VLANGroup.from_dict(vlan_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


