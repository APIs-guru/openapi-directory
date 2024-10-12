# Enum

Enum type definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edition** | **str** | The source edition string, only valid when syntax is SYNTAX_EDITIONS. | [optional] 
**enumvalue** | [**List[EnumValue]**](EnumValue.md) | Enum value definitions. | [optional] 
**name** | **str** | Enum type name. | [optional] 
**options** | [**List[Option]**](Option.md) | Protocol buffer options. | [optional] 
**source_context** | [**SourceContext**](SourceContext.md) |  | [optional] 
**syntax** | **str** | The source syntax. | [optional] 

## Example

```python
from openapi_client.models.enum import Enum

# TODO update the JSON string below
json = "{}"
# create an instance of Enum from a JSON string
enum_instance = Enum.from_json(json)
# print the JSON string representation of the object
print(Enum.to_json())

# convert the object into a dict
enum_dict = enum_instance.to_dict()
# create an instance of Enum from a dict
enum_from_dict = Enum.from_dict(enum_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


