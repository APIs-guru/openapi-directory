# Attribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_names** | **List[str]** |  | [optional] 
**config_string** | **str** |  | [optional] 
**data_reference** | [**DataReference**](DataReference.md) |  | [optional] 
**data_reference_plug_in** | **str** |  | [optional] 
**default_units_name** | **str** |  | [optional] 
**default_units_name_abbreviation** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**display_digits** | **int** |  | [optional] 
**has_children** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**is_configuration_item** | **bool** |  | [optional] 
**is_excluded** | **bool** |  | [optional] 
**is_hidden** | **bool** |  | [optional] 
**is_manual_data_entry** | **bool** |  | [optional] 
**links** | [**AttributeLinks**](AttributeLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**paths** | **List[str]** |  | [optional] 
**span** | **float** |  | [optional] 
**step** | **bool** |  | [optional] 
**trait_name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**type_qualifier** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 
**zero** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.attribute import Attribute

# TODO update the JSON string below
json = "{}"
# create an instance of Attribute from a JSON string
attribute_instance = Attribute.from_json(json)
# print the JSON string representation of the object
print(Attribute.to_json())

# convert the object into a dict
attribute_dict = attribute_instance.to_dict()
# create an instance of Attribute from a dict
attribute_from_dict = Attribute.from_dict(attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


