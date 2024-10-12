# NamedProperty

A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_value** | **bool** |  | [optional] 
**date_values** | [**DateValues**](DateValues.md) |  | [optional] 
**double_values** | [**DoubleValues**](DoubleValues.md) |  | [optional] 
**enum_values** | [**EnumValues**](EnumValues.md) |  | [optional] 
**html_values** | [**HtmlValues**](HtmlValues.md) |  | [optional] 
**integer_values** | [**IntegerValues**](IntegerValues.md) |  | [optional] 
**name** | **str** | The name of the property. This name should correspond to the name of the property that was registered for object definition in the schema. The maximum allowable length for this property is 256 characters. | [optional] 
**object_values** | [**ObjectValues**](ObjectValues.md) |  | [optional] 
**text_values** | [**TextValues**](TextValues.md) |  | [optional] 
**timestamp_values** | [**TimestampValues**](TimestampValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.named_property import NamedProperty

# TODO update the JSON string below
json = "{}"
# create an instance of NamedProperty from a JSON string
named_property_instance = NamedProperty.from_json(json)
# print the JSON string representation of the object
print(NamedProperty.to_json())

# convert the object into a dict
named_property_dict = named_property_instance.to_dict()
# create an instance of NamedProperty from a dict
named_property_from_dict = NamedProperty.from_dict(named_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


