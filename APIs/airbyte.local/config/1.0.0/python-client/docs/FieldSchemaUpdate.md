# FieldSchemaUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_schema** | **object** | JSONSchema representation of the field | 
**old_schema** | **object** | JSONSchema representation of the field | 

## Example

```python
from openapi_client.models.field_schema_update import FieldSchemaUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of FieldSchemaUpdate from a JSON string
field_schema_update_instance = FieldSchemaUpdate.from_json(json)
# print the JSON string representation of the object
print(FieldSchemaUpdate.to_json())

# convert the object into a dict
field_schema_update_dict = field_schema_update_instance.to_dict()
# create an instance of FieldSchemaUpdate from a dict
field_schema_update_from_dict = FieldSchemaUpdate.from_dict(field_schema_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


