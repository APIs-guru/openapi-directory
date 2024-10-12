# CheckBoxField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bbox** | [**BoundingBox**](BoundingBox.md) |  | 
**eval** | [**Eval**](Eval.md) |  | [optional] 
**name** | **str** |  | 
**page** | **int** |  | 
**required** | **bool** |  | [optional] [default to True]
**type** | **str** |  | 

## Example

```python
from openapi_client.models.check_box_field import CheckBoxField

# TODO update the JSON string below
json = "{}"
# create an instance of CheckBoxField from a JSON string
check_box_field_instance = CheckBoxField.from_json(json)
# print the JSON string representation of the object
print(CheckBoxField.to_json())

# convert the object into a dict
check_box_field_dict = check_box_field_instance.to_dict()
# create an instance of CheckBoxField from a dict
check_box_field_from_dict = CheckBoxField.from_dict(check_box_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


