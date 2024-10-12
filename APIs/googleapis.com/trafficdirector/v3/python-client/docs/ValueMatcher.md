# ValueMatcher

Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 8]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_match** | **bool** | If specified, a match occurs if and only if the target value is a bool value and is equal to this field. | [optional] 
**double_match** | [**DoubleMatcher**](DoubleMatcher.md) |  | [optional] 
**list_match** | [**ListMatcher**](ListMatcher.md) |  | [optional] 
**null_match** | **object** | NullMatch is an empty message to specify a null value. | [optional] 
**or_match** | [**OrMatcher**](OrMatcher.md) |  | [optional] 
**present_match** | **bool** | If specified, value match will be performed based on whether the path is referring to a valid primitive value in the metadata. If the path is referring to a non-primitive value, the result is always not matched. | [optional] 
**string_match** | [**StringMatcher**](StringMatcher.md) |  | [optional] 

## Example

```python
from openapi_client.models.value_matcher import ValueMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of ValueMatcher from a JSON string
value_matcher_instance = ValueMatcher.from_json(json)
# print the JSON string representation of the object
print(ValueMatcher.to_json())

# convert the object into a dict
value_matcher_dict = value_matcher_instance.to_dict()
# create an instance of ValueMatcher from a dict
value_matcher_from_dict = ValueMatcher.from_dict(value_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


