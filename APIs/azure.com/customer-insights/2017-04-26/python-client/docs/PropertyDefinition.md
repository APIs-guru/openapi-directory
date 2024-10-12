# PropertyDefinition

Property definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array_value_separator** | **str** | Array value separator for properties with isArray set. | [optional] 
**data_source_precedence_rules** | [**List[DataSourcePrecedence]**](DataSourcePrecedence.md) | This is specific to interactions modeled as activities. Data sources are used to determine where data is stored and also in precedence rules. | [optional] [readonly] 
**enum_valid_values** | [**List[ProfileEnumValidValuesFormat]**](ProfileEnumValidValuesFormat.md) | Describes valid values for an enum property. | [optional] 
**field_name** | **str** | Name of the property. | 
**field_type** | **str** | Type of the property. | 
**is_array** | **bool** | Indicates if the property is actually an array of the fieldType above on the data api. | [optional] 
**is_available_in_graph** | **bool** | Whether property is available in graph or not. | [optional] 
**is_enum** | **bool** | Indicates if the property is an enum. | [optional] 
**is_flag_enum** | **bool** | Indicates if the property is an flag enum. | [optional] 
**is_image** | **bool** | Whether the property is an Image. | [optional] 
**is_localized_string** | **bool** | Whether the property is a localized string. | [optional] 
**is_name** | **bool** | Whether the property is a name or a part of name. | [optional] 
**is_required** | **bool** | Whether property value is required on instances, IsRequired field only for Interaction. Profile Instance will not check for required field. | [optional] 
**max_length** | **int** | Max length of string. Used only if type is string. | [optional] 
**property_id** | **str** | The ID associated with the property. | [optional] 
**schema_item_prop_link** | **str** | URL encoded schema.org item prop link for the property. | [optional] 

## Example

```python
from openapi_client.models.property_definition import PropertyDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyDefinition from a JSON string
property_definition_instance = PropertyDefinition.from_json(json)
# print the JSON string representation of the object
print(PropertyDefinition.to_json())

# convert the object into a dict
property_definition_dict = property_definition_instance.to_dict()
# create an instance of PropertyDefinition from a dict
property_definition_from_dict = PropertyDefinition.from_dict(property_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


