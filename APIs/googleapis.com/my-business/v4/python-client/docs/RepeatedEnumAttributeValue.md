# RepeatedEnumAttributeValue

Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**set_values** | **List[str]** | Enum values that are set. | [optional] 
**unset_values** | **List[str]** | Enum values that are unset. | [optional] 

## Example

```python
from openapi_client.models.repeated_enum_attribute_value import RepeatedEnumAttributeValue

# TODO update the JSON string below
json = "{}"
# create an instance of RepeatedEnumAttributeValue from a JSON string
repeated_enum_attribute_value_instance = RepeatedEnumAttributeValue.from_json(json)
# print the JSON string representation of the object
print(RepeatedEnumAttributeValue.to_json())

# convert the object into a dict
repeated_enum_attribute_value_dict = repeated_enum_attribute_value_instance.to_dict()
# create an instance of RepeatedEnumAttributeValue from a dict
repeated_enum_attribute_value_from_dict = RepeatedEnumAttributeValue.from_dict(repeated_enum_attribute_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


