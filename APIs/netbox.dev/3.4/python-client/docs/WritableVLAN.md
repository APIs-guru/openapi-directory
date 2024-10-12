# WritableVLAN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**group** | **int** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**l2vpn_termination** | **str** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**prefix_count** | **int** |  | [optional] [readonly] 
**role** | **int** |  | [optional] 
**site** | **int** |  | [optional] 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vid** | **int** |  | 

## Example

```python
from openapi_client.models.writable_vlan import WritableVLAN

# TODO update the JSON string below
json = "{}"
# create an instance of WritableVLAN from a JSON string
writable_vlan_instance = WritableVLAN.from_json(json)
# print the JSON string representation of the object
print(WritableVLAN.to_json())

# convert the object into a dict
writable_vlan_dict = writable_vlan_instance.to_dict()
# create an instance of WritableVLAN from a dict
writable_vlan_from_dict = WritableVLAN.from_dict(writable_vlan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


