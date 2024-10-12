# ModelField

Metadata of an entity field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_details** | **Dict[str, object]** | The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields. | [optional] 
**data_type** | **str** | The data type of the Field. | [optional] 
**default_value** | **object** | The following field specifies the default value of the Field provided by the external system if a value is not provided. | [optional] 
**description** | **str** | A brief description of the Field. | [optional] 
**var_field** | **str** | Name of the Field. | [optional] 
**json_schema** | [**JsonSchema**](JsonSchema.md) |  | [optional] 
**key** | **bool** | The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity. | [optional] 
**nullable** | **bool** | Specifies whether a null value is allowed. | [optional] 
**readonly** | **bool** | Specifies if the Field is readonly. | [optional] 

## Example

```python
from openapi_client.models.model_field import ModelField

# TODO update the JSON string below
json = "{}"
# create an instance of ModelField from a JSON string
model_field_instance = ModelField.from_json(json)
# print the JSON string representation of the object
print(ModelField.to_json())

# convert the object into a dict
model_field_dict = model_field_instance.to_dict()
# create an instance of ModelField from a dict
model_field_from_dict = ModelField.from_dict(model_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


