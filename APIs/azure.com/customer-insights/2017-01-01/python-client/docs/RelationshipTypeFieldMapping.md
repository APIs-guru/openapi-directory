# RelationshipTypeFieldMapping

Map a field of profile to its corresponding StrongId in Related Profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_field_name** | **str** | Specifies the fieldName in profile. | 
**related_profile_key_property** | **str** | Specifies the KeyProperty (from StrongId) of the related profile. | 

## Example

```python
from openapi_client.models.relationship_type_field_mapping import RelationshipTypeFieldMapping

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipTypeFieldMapping from a JSON string
relationship_type_field_mapping_instance = RelationshipTypeFieldMapping.from_json(json)
# print the JSON string representation of the object
print(RelationshipTypeFieldMapping.to_json())

# convert the object into a dict
relationship_type_field_mapping_dict = relationship_type_field_mapping_instance.to_dict()
# create an instance of RelationshipTypeFieldMapping from a dict
relationship_type_field_mapping_from_dict = RelationshipTypeFieldMapping.from_dict(relationship_type_field_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


