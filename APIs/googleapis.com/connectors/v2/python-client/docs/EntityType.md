# EntityType

EntityType message contains metadata information about a single entity type present in the external system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[ModelField]**](ModelField.md) | List containing metadata information about each field of the entity type. | [optional] 
**json_schema** | [**JsonSchema**](JsonSchema.md) |  | [optional] 
**name** | **str** | The name of the entity type. | [optional] 

## Example

```python
from openapi_client.models.entity_type import EntityType

# TODO update the JSON string below
json = "{}"
# create an instance of EntityType from a JSON string
entity_type_instance = EntityType.from_json(json)
# print the JSON string representation of the object
print(EntityType.to_json())

# convert the object into a dict
entity_type_dict = entity_type_instance.to_dict()
# create an instance of EntityType from a dict
entity_type_from_dict = EntityType.from_dict(entity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


