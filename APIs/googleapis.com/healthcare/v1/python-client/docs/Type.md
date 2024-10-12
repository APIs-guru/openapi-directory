# Type

A type definition for some HL7v2 type (incl. Segments and Datatypes).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[ModelField]**](ModelField.md) | The (sub) fields this type has (if not primitive). | [optional] 
**name** | **str** | The name of this type. This would be the segment or datatype name. For example, \&quot;PID\&quot; or \&quot;XPN\&quot;. | [optional] 
**primitive** | **str** | If this is a primitive type then this field is the type of the primitive For example, STRING. Leave unspecified for composite types. | [optional] 

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


