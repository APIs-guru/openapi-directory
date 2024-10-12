# PropertyDefinition

The definition of a property within an object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_property_options** | [**BooleanPropertyOptions**](BooleanPropertyOptions.md) |  | [optional] 
**date_property_options** | [**DatePropertyOptions**](DatePropertyOptions.md) |  | [optional] 
**display_options** | [**PropertyDisplayOptions**](PropertyDisplayOptions.md) |  | [optional] 
**double_property_options** | [**DoublePropertyOptions**](DoublePropertyOptions.md) |  | [optional] 
**enum_property_options** | [**EnumPropertyOptions**](EnumPropertyOptions.md) |  | [optional] 
**html_property_options** | [**HtmlPropertyOptions**](HtmlPropertyOptions.md) |  | [optional] 
**integer_property_options** | [**IntegerPropertyOptions**](IntegerPropertyOptions.md) |  | [optional] 
**is_facetable** | **bool** | Indicates that the property can be used for generating facets. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, enum, integer, and text properties. | [optional] 
**is_repeatable** | **bool** | Indicates that multiple values are allowed for the property. For example, a document only has one description but can have multiple comments. Cannot be true for properties whose type is a boolean. If set to false, properties that contain more than one value cause the indexing request for that item to be rejected. | [optional] 
**is_returnable** | **bool** | Indicates that the property identifies data that should be returned in search results via the Query API. If set to *true*, indicates that Query API users can use matching property fields in results. However, storing fields requires more space allocation and uses more bandwidth for search queries, which impacts performance over large datasets. Set to *true* here only if the field is needed for search results. Cannot be true for properties whose type is an object. | [optional] 
**is_sortable** | **bool** | Indicates that the property can be used for sorting. Cannot be true for properties that are repeatable. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, date, double, integer, and timestamp properties. | [optional] 
**is_suggestable** | **bool** | Indicates that the property can be used for generating query suggestions. | [optional] 
**is_wildcard_searchable** | **bool** | Indicates that users can perform wildcard search for this property. Only supported for Text properties. IsReturnable must be true to set this option. In a given datasource maximum of 5 properties can be marked as is_wildcard_searchable. For more details, see [Define object properties](https://developers.google.com/cloud-search/docs/guides/schema-guide#properties) | [optional] 
**name** | **str** | The name of the property. Item indexing requests sent to the Indexing API should set the property name equal to this value. For example, if name is *subject_line*, then indexing requests for document items with subject fields should set the name for that field equal to *subject_line*. Use the name as the identifier for the object property. Once registered as a property for an object, you cannot re-use this name for another property within that object. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters. | [optional] 
**object_property_options** | [**ObjectPropertyOptions**](ObjectPropertyOptions.md) |  | [optional] 
**text_property_options** | [**TextPropertyOptions**](TextPropertyOptions.md) |  | [optional] 
**timestamp_property_options** | [**TimestampPropertyOptions**](TimestampPropertyOptions.md) |  | [optional] 

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


