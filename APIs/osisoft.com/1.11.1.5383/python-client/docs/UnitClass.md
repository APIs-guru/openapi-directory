# UnitClass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_unit_abbreviation** | **str** |  | [optional] 
**canonical_unit_name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**UnitClassLinks**](UnitClassLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.unit_class import UnitClass

# TODO update the JSON string below
json = "{}"
# create an instance of UnitClass from a JSON string
unit_class_instance = UnitClass.from_json(json)
# print the JSON string representation of the object
print(UnitClass.to_json())

# convert the object into a dict
unit_class_dict = unit_class_instance.to_dict()
# create an instance of UnitClass from a dict
unit_class_from_dict = UnitClass.from_dict(unit_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


