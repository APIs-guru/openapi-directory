# AttributeValue

The allowed types for `[VALUE]` in a `[KEY]:[VALUE]` attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | A Boolean value represented by &#x60;true&#x60; or &#x60;false&#x60;. | [optional] 
**int_value** | **str** | A 64-bit signed integer. | [optional] 
**string_value** | [**TruncatableString**](TruncatableString.md) |  | [optional] 

## Example

```python
from openapi_client.models.attribute_value import AttributeValue

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeValue from a JSON string
attribute_value_instance = AttributeValue.from_json(json)
# print the JSON string representation of the object
print(AttributeValue.to_json())

# convert the object into a dict
attribute_value_dict = attribute_value_instance.to_dict()
# create an instance of AttributeValue from a dict
attribute_value_from_dict = AttributeValue.from_dict(attribute_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


