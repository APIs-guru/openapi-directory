# AddFieldsDataFieldsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alignment** | **str** |  | [optional] 
**auto_calculate_max_length** | **bool** |  | [optional] 
**background_color** | **str** |  | [optional] 
**background_color_field_name** | **str** |  | [optional] 
**background_color_field_required** | **bool** |  | [optional] 
**barcode_symbology** | **str** |  | [optional] 
**bold** | **bool** |  | [optional] 
**character_spacing** | **float** |  | [optional] 
**check_character** | **str** |  | [optional] 
**check_color** | **str** |  | [optional] 
**check_color_field_name** | **str** |  | [optional] 
**check_color_field_required** | **bool** |  | [optional] 
**color** | **str** |  | [optional] 
**color_field_name** | **str** |  | [optional] 
**color_field_required** | **bool** |  | [optional] 
**comb** | **bool** |  | [optional] 
**comb_number_of_cells** | **float** |  | [optional] 
**comb_value_offset** | **float** |  | [optional] 
**combined_field_format** | **str** |  | [optional] 
**combined_field_names** | **str** |  | [optional] 
**combined_field_separator** | **str** |  | [optional] 
**combined_field_type** | **str** |  | [optional] 
**condition** | **str** |  | [optional] 
**currency** | **bool** |  | [optional] 
**date_time_format** | **str** |  | [optional] 
**decimal_places** | **float** |  | [optional] 
**default** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**display_type** | **str** |  | [optional] 
**exclusive_maximum** | **bool** |  | [optional] 
**exclusive_minimum** | **bool** |  | [optional] 
**false_text** | **str** |  | [optional] 
**font_size** | **float** |  | [optional] 
**height** | **float** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**id** | **float** |  | [optional] 
**image_gravity** | **str** |  | [optional] 
**image_scale_type** | **str** |  | [optional] 
**include_time** | **bool** |  | [optional] 
**integer** | **bool** |  | [optional] 
**invert_boolean_condition** | **bool** |  | [optional] 
**max_length** | **float** |  | [optional] 
**maximum** | **float** |  | [optional] 
**metadata** | **str** |  | [optional] 
**min_length** | **float** |  | [optional] 
**minimum** | **float** |  | [optional] 
**multiline** | **bool** |  | [optional] 
**multiline_lines** | **float** |  | [optional] 
**name** | **str** |  | 
**number_condition_range_exclusive_max** | **bool** |  | [optional] 
**number_condition_range_exclusive_min** | **bool** |  | [optional] 
**number_condition_range_max** | **float** |  | [optional] 
**number_condition_range_min** | **float** |  | [optional] 
**number_condition_type** | **str** |  | [optional] 
**opacity** | **float** |  | [optional] 
**option_list** | **str** |  | [optional] 
**overflow** | **str** |  | [optional] 
**page** | **float** |  | 
**placeholder** | **str** |  | [optional] 
**qrcode_color** | **str** |  | [optional] 
**qrcode_color_field_name** | **str** |  | [optional] 
**qrcode_color_field_required** | **bool** |  | [optional] 
**required** | **bool** |  | [optional] 
**rotation** | **float** |  | [optional] 
**shape_border_color** | **str** |  | [optional] 
**shape_border_color_field_name** | **str** |  | [optional] 
**shape_border_color_field_required** | **bool** |  | [optional] 
**shape_border_width** | **float** |  | [optional] 
**shape_fill_color** | **str** |  | [optional] 
**shape_fill_color_field_name** | **str** |  | [optional] 
**shape_fill_color_field_required** | **bool** |  | [optional] 
**shape_type** | **str** |  | [optional] 
**signature_allow_draw** | **bool** |  | [optional] 
**signature_allow_type** | **bool** |  | [optional] 
**static** | **bool** |  | [optional] 
**strikethrough** | **bool** |  | [optional] 
**string_condition_type** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**true_text** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**typeface** | **str** |  | [optional] 
**uppercase** | **bool** |  | [optional] 
**v_alignment** | **str** |  | [optional] 
**width** | **float** |  | [optional] 
**x** | **float** |  | [optional] 
**y** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.add_fields_data_fields_inner import AddFieldsDataFieldsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddFieldsDataFieldsInner from a JSON string
add_fields_data_fields_inner_instance = AddFieldsDataFieldsInner.from_json(json)
# print the JSON string representation of the object
print(AddFieldsDataFieldsInner.to_json())

# convert the object into a dict
add_fields_data_fields_inner_dict = add_fields_data_fields_inner_instance.to_dict()
# create an instance of AddFieldsDataFieldsInner from a dict
add_fields_data_fields_inner_from_dict = AddFieldsDataFieldsInner.from_dict(add_fields_data_fields_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


