# Type

A protocol buffer message type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edition** | **str** | The source edition string, only valid when syntax is SYNTAX_EDITIONS. | [optional] 
**fields** | [**List[ModelField]**](ModelField.md) | The list of fields. | [optional] 
**name** | **str** | The fully qualified message name. | [optional] 
**oneofs** | **List[str]** | The list of types appearing in &#x60;oneof&#x60; definitions in this type. | [optional] 
**options** | [**List[Option]**](Option.md) | The protocol buffer options. | [optional] 
**source_context** | [**SourceContext**](SourceContext.md) |  | [optional] 
**syntax** | **str** | The source syntax. | [optional] 

## Example

```python
from openapi_client.models.type import Type

# TODO update the JSON string below
json = "{}"
# create an instance of Type from a JSON string
type_instance = Type.from_json(json)
# print the JSON string representation of the object
print(Type.to_json())

# convert the object into a dict
type_dict = type_instance.to_dict()
# create an instance of Type from a dict
type_from_dict = Type.from_dict(type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


