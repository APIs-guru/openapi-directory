# RelationshipLinkDefinition

The definition of relationship link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **Dict[str, str]** | Localized descriptions for the Relationship Link. | [optional] 
**display_name** | **Dict[str, str]** | Localized display name for the Relationship Link. | [optional] 
**interaction_type** | **str** | The InteractionType associated with the Relationship Link. | 
**link_name** | **str** | The name of the Relationship Link. | [optional] [readonly] 
**mappings** | [**List[RelationshipLinkFieldMapping]**](RelationshipLinkFieldMapping.md) | The mappings between Interaction and Relationship fields. | [optional] 
**profile_property_references** | [**List[ParticipantPropertyReference]**](ParticipantPropertyReference.md) | The property references for the Profile of the Relationship. | 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**related_profile_property_references** | [**List[ParticipantPropertyReference]**](ParticipantPropertyReference.md) | The property references for the Related Profile of the Relationship. | 
**relationship_guid_id** | **str** | The relationship guid id. | [optional] [readonly] 
**relationship_name** | **str** | The Relationship associated with the Link. | 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.relationship_link_definition import RelationshipLinkDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipLinkDefinition from a JSON string
relationship_link_definition_instance = RelationshipLinkDefinition.from_json(json)
# print the JSON string representation of the object
print(RelationshipLinkDefinition.to_json())

# convert the object into a dict
relationship_link_definition_dict = relationship_link_definition_instance.to_dict()
# create an instance of RelationshipLinkDefinition from a dict
relationship_link_definition_from_dict = RelationshipLinkDefinition.from_dict(relationship_link_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


