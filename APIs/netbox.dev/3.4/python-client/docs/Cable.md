# Cable


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
**length_unit** | [**LengthUnit**](LengthUnit.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**type** | **str** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.cable import Cable

# TODO update the JSON string below
json = "{}"
# create an instance of Cable from a JSON string
cable_instance = Cable.from_json(json)
# print the JSON string representation of the object
print(Cable.to_json())

# convert the object into a dict
cable_dict = cable_instance.to_dict()
# create an instance of Cable from a dict
cable_from_dict = Cable.from_dict(cable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


