# EnumValue

Enum value definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Enum value name. | [optional] 
**number** | **int** | Enum value number. | [optional] 
**options** | [**List[Option]**](Option.md) | Protocol buffer options. | [optional] 

## Example

```python
from openapi_client.models.enum_value import EnumValue

# TODO update the JSON string below
json = "{}"
# create an instance of EnumValue from a JSON string
enum_value_instance = EnumValue.from_json(json)
# print the JSON string representation of the object
print(EnumValue.to_json())

# convert the object into a dict
enum_value_dict = enum_value_instance.to_dict()
# create an instance of EnumValue from a dict
enum_value_from_dict = EnumValue.from_dict(enum_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


