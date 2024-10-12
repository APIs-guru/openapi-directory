# NestedVirtualChassis


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**master** | [**NestedDevice**](NestedDevice.md) |  | 
**member_count** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_virtual_chassis import NestedVirtualChassis

# TODO update the JSON string below
json = "{}"
# create an instance of NestedVirtualChassis from a JSON string
nested_virtual_chassis_instance = NestedVirtualChassis.from_json(json)
# print the JSON string representation of the object
print(NestedVirtualChassis.to_json())

# convert the object into a dict
nested_virtual_chassis_dict = nested_virtual_chassis_instance.to_dict()
# create an instance of NestedVirtualChassis from a dict
nested_virtual_chassis_from_dict = NestedVirtualChassis.from_dict(nested_virtual_chassis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


