# WritableVirtualChassis


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
**master** | **int** |  | [optional] 
**member_count** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_virtual_chassis import WritableVirtualChassis

# TODO update the JSON string below
json = "{}"
# create an instance of WritableVirtualChassis from a JSON string
writable_virtual_chassis_instance = WritableVirtualChassis.from_json(json)
# print the JSON string representation of the object
print(WritableVirtualChassis.to_json())

# convert the object into a dict
writable_virtual_chassis_dict = writable_virtual_chassis_instance.to_dict()
# create an instance of WritableVirtualChassis from a dict
writable_virtual_chassis_from_dict = WritableVirtualChassis.from_dict(writable_virtual_chassis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


