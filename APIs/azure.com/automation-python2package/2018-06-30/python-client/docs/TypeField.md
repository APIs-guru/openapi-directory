# TypeField

Information about a field of a type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the field. | [optional] 
**type** | **str** | Gets or sets the type of the field. | [optional] 

## Example

```python
from openapi_client.models.type_field import TypeField

# TODO update the JSON string below
json = "{}"
# create an instance of TypeField from a JSON string
type_field_instance = TypeField.from_json(json)
# print the JSON string representation of the object
print(TypeField.to_json())

# convert the object into a dict
type_field_dict = type_field_instance.to_dict()
# create an instance of TypeField from a dict
type_field_from_dict = TypeField.from_dict(type_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


