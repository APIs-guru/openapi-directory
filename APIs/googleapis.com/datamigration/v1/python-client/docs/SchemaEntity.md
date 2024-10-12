# SchemaEntity

Schema typically has no parent entity, but can have a parent entity DatabaseInstance (for database engines which support it). For some database engines, the terms schema and user can be used interchangeably when they refer to a namespace or a collection of other database entities. Can store additional information which is schema specific.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 

## Example

```python
from openapi_client.models.schema_entity import SchemaEntity

# TODO update the JSON string below
json = "{}"
# create an instance of SchemaEntity from a JSON string
schema_entity_instance = SchemaEntity.from_json(json)
# print the JSON string representation of the object
print(SchemaEntity.to_json())

# convert the object into a dict
schema_entity_dict = schema_entity_instance.to_dict()
# create an instance of SchemaEntity from a dict
schema_entity_from_dict = SchemaEntity.from_dict(schema_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


