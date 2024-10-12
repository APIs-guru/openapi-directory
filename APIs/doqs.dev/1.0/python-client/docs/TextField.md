# TextField


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
**h_align** | [**HorizontalAlign**](HorizontalAlign.md) |  | [optional] 
**name** | **str** |  | 
**page** | **int** |  | 
**required** | **bool** |  | [optional] [default to True]
**type** | **str** |  | 
**v_align** | [**VerticalAlign**](VerticalAlign.md) |  | [optional] 

## Example

```python
from openapi_client.models.text_field import TextField

# TODO update the JSON string below
json = "{}"
# create an instance of TextField from a JSON string
text_field_instance = TextField.from_json(json)
# print the JSON string representation of the object
print(TextField.to_json())

# convert the object into a dict
text_field_dict = text_field_instance.to_dict()
# create an instance of TextField from a dict
text_field_from_dict = TextField.from_dict(text_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


