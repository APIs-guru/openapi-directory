# VirtualChassis


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**domain** | **str** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**master** | [**NestedDevice**](NestedDevice.md) |  | [optional] 
**member_count** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_chassis import VirtualChassis

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualChassis from a JSON string
virtual_chassis_instance = VirtualChassis.from_json(json)
# print the JSON string representation of the object
print(VirtualChassis.to_json())

# convert the object into a dict
virtual_chassis_dict = virtual_chassis_instance.to_dict()
# create an instance of VirtualChassis from a dict
virtual_chassis_from_dict = VirtualChassis.from_dict(virtual_chassis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


