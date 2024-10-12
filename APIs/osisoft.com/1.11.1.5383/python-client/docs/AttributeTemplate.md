# AttributeTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_names** | **List[str]** |  | [optional] 
**config_string** | **str** |  | [optional] 
**data_reference_plug_in** | **str** |  | [optional] 
**default_units_name** | **str** |  | [optional] 
**default_units_name_abbreviation** | **str** |  | [optional] 
**default_value** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**has_children** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**is_configuration_item** | **bool** |  | [optional] 
**is_excluded** | **bool** |  | [optional] 
**is_hidden** | **bool** |  | [optional] 
**is_manual_data_entry** | **bool** |  | [optional] 
**links** | [**AttributeTemplateLinks**](AttributeTemplateLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**trait_name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**type_qualifier** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attribute_template import AttributeTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeTemplate from a JSON string
attribute_template_instance = AttributeTemplate.from_json(json)
# print the JSON string representation of the object
print(AttributeTemplate.to_json())

# convert the object into a dict
attribute_template_dict = attribute_template_instance.to_dict()
# create an instance of AttributeTemplate from a dict
attribute_template_from_dict = AttributeTemplate.from_dict(attribute_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


