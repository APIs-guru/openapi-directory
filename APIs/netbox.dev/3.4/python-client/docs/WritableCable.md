# WritableCable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**a_terminations** | [**List[GenericObject]**](GenericObject.md) |  | [optional] 
**b_terminations** | [**List[GenericObject]**](GenericObject.md) |  | [optional] 
**color** | **str** |  | [optional] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**length** | **float** |  | [optional] 
**length_unit** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_cable import WritableCable

# TODO update the JSON string below
json = "{}"
# create an instance of WritableCable from a JSON string
writable_cable_instance = WritableCable.from_json(json)
# print the JSON string representation of the object
print(WritableCable.to_json())

# convert the object into a dict
writable_cable_dict = writable_cable_instance.to_dict()
# create an instance of WritableCable from a dict
writable_cable_from_dict = WritableCable.from_dict(writable_cable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


