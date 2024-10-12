# FieldTransform

A transformation of a field of the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**append_missing_elements** | [**ArrayValue**](ArrayValue.md) |  | [optional] 
**field_path** | **str** | The path of the field. See Document.fields for the field path syntax reference. | [optional] 
**increment** | [**Value**](Value.md) |  | [optional] 
**maximum** | [**Value**](Value.md) |  | [optional] 
**minimum** | [**Value**](Value.md) |  | [optional] 
**remove_all_from_array** | [**ArrayValue**](ArrayValue.md) |  | [optional] 
**set_to_server_value** | **str** | Sets the field to the given server value. | [optional] 

## Example

```python
from openapi_client.models.field_transform import FieldTransform

# TODO update the JSON string below
json = "{}"
# create an instance of FieldTransform from a JSON string
field_transform_instance = FieldTransform.from_json(json)
# print the JSON string representation of the object
print(FieldTransform.to_json())

# convert the object into a dict
field_transform_dict = field_transform_instance.to_dict()
# create an instance of FieldTransform from a dict
field_transform_from_dict = FieldTransform.from_dict(field_transform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


