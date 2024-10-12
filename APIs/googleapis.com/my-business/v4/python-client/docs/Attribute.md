# Attribute

A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_id** | **str** | The ID of the attribute. Attribute IDs are provided by Google. | [optional] 
**repeated_enum_value** | [**RepeatedEnumAttributeValue**](RepeatedEnumAttributeValue.md) |  | [optional] 
**url_values** | [**List[UrlAttributeValue]**](UrlAttributeValue.md) | When the attribute value type is URL, this field contains the value(s) for this attribute, and the other values fields must be empty. | [optional] 
**value_type** | **str** | Output only. The type of value that this attribute contains. This should be used to determine how to interpret the value. | [optional] 
**values** | **List[object]** | The values for this attribute. The type of the values supplied must match that expected for that attribute; see [AttributeValueType](/my-business/reference/rest/v4/AttributeValueType). This is a repeated field where multiple attribute values may be provided. Attribute types only support one value. | [optional] 

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


