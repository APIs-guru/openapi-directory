# EntityMapping

Details of the mappings of a database entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**draft_entity** | **str** | Target entity full name. The draft entity can also include a column, index or constraint using the same naming notation schema.table.column. | [optional] 
**draft_type** | **str** | Type of draft entity. | [optional] 
**mapping_log** | [**List[EntityMappingLogEntry]**](EntityMappingLogEntry.md) | Entity mapping log entries. Multiple rules can be effective and contribute changes to a converted entity, such as a rule can handle the entity name, another rule can handle an entity type. In addition, rules which did not change the entity are also logged along with the reason preventing them to do so. | [optional] 
**source_entity** | **str** | Source entity full name. The source entity can also be a column, index or constraint using the same naming notation schema.table.column. | [optional] 
**source_type** | **str** | Type of source entity. | [optional] 

## Example

```python
from openapi_client.models.entity_mapping import EntityMapping

# TODO update the JSON string below
json = "{}"
# create an instance of EntityMapping from a JSON string
entity_mapping_instance = EntityMapping.from_json(json)
# print the JSON string representation of the object
print(EntityMapping.to_json())

# convert the object into a dict
entity_mapping_dict = entity_mapping_instance.to_dict()
# create an instance of EntityMapping from a dict
entity_mapping_from_dict = EntityMapping.from_dict(entity_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


