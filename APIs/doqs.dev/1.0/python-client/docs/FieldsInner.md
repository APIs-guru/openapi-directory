# FieldsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bbox** | [**BoundingBox**](BoundingBox.md) |  | 
**cell_count** | **int** |  | [optional] [default to 0]
**cell_offset** | **int** |  | [optional] [default to 0]
**cells** | **bool** |  | [optional] [default to False]
**color** | **str** |  | [optional] [default to 'black']
**font** | [**Font**](Font.md) |  | [optional] 
**font_size** | **int** |  | [optional] [default to 10]
**format** | **str** |  | 
**h_align** | [**HorizontalAlign**](HorizontalAlign.md) |  | [optional] 
**locale** | **str** |  | [optional] [default to 'en_US']
**name** | **str** |  | 
**page** | **int** |  | 
**required** | **bool** |  | [optional] [default to True]
**type** | **str** |  | 
**v_align** | [**VerticalAlign**](VerticalAlign.md) |  | [optional] 
**anchor** | [**ImageAnchor**](ImageAnchor.md) |  | [optional] 
**eval** | [**Eval**](Eval.md) |  | [optional] 

## Example

```python
from openapi_client.models.fields_inner import FieldsInner

# TODO update the JSON string below
json = "{}"
# create an instance of FieldsInner from a JSON string
fields_inner_instance = FieldsInner.from_json(json)
# print the JSON string representation of the object
print(FieldsInner.to_json())

# convert the object into a dict
fields_inner_dict = fields_inner_instance.to_dict()
# create an instance of FieldsInner from a dict
fields_inner_from_dict = FieldsInner.from_dict(fields_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


