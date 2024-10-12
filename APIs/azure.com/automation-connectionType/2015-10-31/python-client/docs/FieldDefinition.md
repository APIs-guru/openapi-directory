# FieldDefinition

Definition of the connection fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_encrypted** | **bool** | Gets or sets the isEncrypted flag of the connection field definition. | [optional] 
**is_optional** | **bool** | Gets or sets the isOptional flag of the connection field definition. | [optional] 
**type** | **str** | Gets or sets the type of the connection field definition. | 

## Example

```python
from openapi_client.models.field_definition import FieldDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of FieldDefinition from a JSON string
field_definition_instance = FieldDefinition.from_json(json)
# print the JSON string representation of the object
print(FieldDefinition.to_json())

# convert the object into a dict
field_definition_dict = field_definition_instance.to_dict()
# create an instance of FieldDefinition from a dict
field_definition_from_dict = FieldDefinition.from_dict(field_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


