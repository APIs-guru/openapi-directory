# RelationshipsLookup

The definition of suggested relationship for the type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**existing_relationship_name** | **str** | The name of existing Relationship. | [optional] [readonly] 
**profile_name** | **str** | The relationship profile. | [optional] [readonly] 
**profile_property_references** | [**List[ParticipantPropertyReference]**](ParticipantPropertyReference.md) | The property references for the profile type. | [optional] [readonly] 
**related_profile_name** | **str** | The related profile. | [optional] [readonly] 
**related_profile_property_references** | [**List[ParticipantPropertyReference]**](ParticipantPropertyReference.md) | The property references for the related profile type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.relationships_lookup import RelationshipsLookup

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipsLookup from a JSON string
relationships_lookup_instance = RelationshipsLookup.from_json(json)
# print the JSON string representation of the object
print(RelationshipsLookup.to_json())

# convert the object into a dict
relationships_lookup_dict = relationships_lookup_instance.to_dict()
# create an instance of RelationshipsLookup from a dict
relationships_lookup_from_dict = RelationshipsLookup.from_dict(relationships_lookup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


