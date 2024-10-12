# AttributeNameValue

The type the defines attribute name/value pair fields that specify a product. The type of data depends on the context. For example, if you were using this to specify a specific vehicle, the attribute names would be Make, Model, Year, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the product attribute, such as Make, Model, Year, etc. | [optional] 
**value** | **str** | The value for the name attribute, such as BMW, R1200GS, 2011, etc. | [optional] 

## Example

```python
from openapi_client.models.attribute_name_value import AttributeNameValue

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeNameValue from a JSON string
attribute_name_value_instance = AttributeNameValue.from_json(json)
# print the JSON string representation of the object
print(AttributeNameValue.to_json())

# convert the object into a dict
attribute_name_value_dict = attribute_name_value_instance.to_dict()
# create an instance of AttributeNameValue from a dict
attribute_name_value_from_dict = AttributeNameValue.from_dict(attribute_name_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


