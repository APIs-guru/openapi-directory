# RelationshipTypeMapping

Maps fields in Profile to their corresponding StrongIds in Related Profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_mappings** | [**List[RelationshipTypeFieldMapping]**](RelationshipTypeFieldMapping.md) | Maps a profile property with the StrongId of related profile. This is an array to support StrongIds that are composite key as well. | 

## Example

```python
from openapi_client.models.relationship_type_mapping import RelationshipTypeMapping

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipTypeMapping from a JSON string
relationship_type_mapping_instance = RelationshipTypeMapping.from_json(json)
# print the JSON string representation of the object
print(RelationshipTypeMapping.to_json())

# convert the object into a dict
relationship_type_mapping_dict = relationship_type_mapping_instance.to_dict()
# create an instance of RelationshipTypeMapping from a dict
relationship_type_mapping_from_dict = RelationshipTypeMapping.from_dict(relationship_type_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


