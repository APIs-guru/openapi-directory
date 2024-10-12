# RuntimeEntitySchema

Schema of a runtime entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Output only. Name of the entity. | [optional] [readonly] 
**fields** | [**List[ModelField]**](ModelField.md) | Output only. List of fields in the entity. | [optional] [readonly] 
**json_schema** | [**JsonSchema**](JsonSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.runtime_entity_schema import RuntimeEntitySchema

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeEntitySchema from a JSON string
runtime_entity_schema_instance = RuntimeEntitySchema.from_json(json)
# print the JSON string representation of the object
print(RuntimeEntitySchema.to_json())

# convert the object into a dict
runtime_entity_schema_dict = runtime_entity_schema_instance.to_dict()
# create an instance of RuntimeEntitySchema from a dict
runtime_entity_schema_from_dict = RuntimeEntitySchema.from_dict(runtime_entity_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


