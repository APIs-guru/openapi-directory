# RelationEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_type** | **str** | Type of the entity (Company, Person, Place, Product, etc.) | 
**title** | **str** | Normalized entity title based on existing entity normalization rules | 

## Example

```python
from openapi_client.models.relation_entity import RelationEntity

# TODO update the JSON string below
json = "{}"
# create an instance of RelationEntity from a JSON string
relation_entity_instance = RelationEntity.from_json(json)
# print the JSON string representation of the object
print(RelationEntity.to_json())

# convert the object into a dict
relation_entity_dict = relation_entity_instance.to_dict()
# create an instance of RelationEntity from a dict
relation_entity_from_dict = RelationEntity.from_dict(relation_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


