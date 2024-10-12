# FHRPGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_key** | **str** |  | [optional] 
**auth_type** | **str** |  | [optional] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**group_id** | **int** |  | 
**id** | **int** |  | [optional] [readonly] 
**ip_addresses** | [**List[NestedIPAddress]**](NestedIPAddress.md) |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**protocol** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.fhrp_group import FHRPGroup

# TODO update the JSON string below
json = "{}"
# create an instance of FHRPGroup from a JSON string
fhrp_group_instance = FHRPGroup.from_json(json)
# print the JSON string representation of the object
print(FHRPGroup.to_json())

# convert the object into a dict
fhrp_group_dict = fhrp_group_instance.to_dict()
# create an instance of FHRPGroup from a dict
fhrp_group_from_dict = FHRPGroup.from_dict(fhrp_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


