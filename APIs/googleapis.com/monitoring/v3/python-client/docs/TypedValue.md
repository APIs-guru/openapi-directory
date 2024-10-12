# TypedValue

A single strongly-typed value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | A Boolean value: true or false. | [optional] 
**distribution_value** | [**Distribution**](Distribution.md) |  | [optional] 
**double_value** | **float** | A 64-bit double-precision floating-point number. Its magnitude is approximately ±10±300 and it has 16 significant digits of precision. | [optional] 
**int64_value** | **str** | A 64-bit integer. Its range is approximately ±9.2x1018. | [optional] 
**string_value** | **str** | A variable-length string value. | [optional] 

## Example

```python
from openapi_client.models.typed_value import TypedValue

# TODO update the JSON string below
json = "{}"
# create an instance of TypedValue from a JSON string
typed_value_instance = TypedValue.from_json(json)
# print the JSON string representation of the object
print(TypedValue.to_json())

# convert the object into a dict
typed_value_dict = typed_value_instance.to_dict()
# create an instance of TypedValue from a dict
typed_value_from_dict = TypedValue.from_dict(typed_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


