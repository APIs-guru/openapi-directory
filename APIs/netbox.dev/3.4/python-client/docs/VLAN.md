# VLAN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**group** | [**NestedVLANGroup**](NestedVLANGroup.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**l2vpn_termination** | [**NestedL2VPNTermination**](NestedL2VPNTermination.md) |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**prefix_count** | **int** |  | [optional] [readonly] 
**role** | [**NestedRole**](NestedRole.md) |  | [optional] 
**site** | [**NestedSite**](NestedSite.md) |  | [optional] 
**status** | [**Status5**](Status5.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vid** | **int** |  | 

## Example

```python
from openapi_client.models.vlan import VLAN

# TODO update the JSON string below
json = "{}"
# create an instance of VLAN from a JSON string
vlan_instance = VLAN.from_json(json)
# print the JSON string representation of the object
print(VLAN.to_json())

# convert the object into a dict
vlan_dict = vlan_instance.to_dict()
# create an instance of VLAN from a dict
vlan_from_dict = VLAN.from_dict(vlan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


