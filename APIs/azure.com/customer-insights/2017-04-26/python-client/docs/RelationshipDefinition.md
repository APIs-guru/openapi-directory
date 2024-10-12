# RelationshipDefinition

The definition of Relationship.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardinality** | **str** | The Relationship Cardinality. | [optional] 
**description** | **Dict[str, str]** | Localized descriptions for the Relationship. | [optional] 
**display_name** | **Dict[str, str]** | Localized display name for the Relationship. | [optional] 
**expiry_date_time_utc** | **datetime** | The expiry date time in UTC. | [optional] 
**fields** | [**List[PropertyDefinition]**](PropertyDefinition.md) | The properties of the Relationship. | [optional] 
**lookup_mappings** | [**List[RelationshipTypeMapping]**](RelationshipTypeMapping.md) | Optional property to be used to map fields in profile to their strong ids in related profile. | [optional] 
**profile_type** | **str** | Profile type. | 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**related_profile_type** | **str** | Related profile being referenced. | 
**relationship_guid_id** | **str** | The relationship guid id. | [optional] [readonly] 
**relationship_name** | **str** | The Relationship name. | [optional] [readonly] 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.relationship_definition import RelationshipDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipDefinition from a JSON string
relationship_definition_instance = RelationshipDefinition.from_json(json)
# print the JSON string representation of the object
print(RelationshipDefinition.to_json())

# convert the object into a dict
relationship_definition_dict = relationship_definition_instance.to_dict()
# create an instance of RelationshipDefinition from a dict
relationship_definition_from_dict = RelationshipDefinition.from_dict(relationship_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


