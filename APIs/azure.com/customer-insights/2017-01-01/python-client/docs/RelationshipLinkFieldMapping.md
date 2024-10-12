# RelationshipLinkFieldMapping

The fields mapping for Relationships.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interaction_field_name** | **str** | The field name on the Interaction Type. | 
**link_type** | **str** | Link type. | [optional] 
**relationship_field_name** | **str** | The field name on the Relationship metadata. | 

## Example

```python
from openapi_client.models.relationship_link_field_mapping import RelationshipLinkFieldMapping

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipLinkFieldMapping from a JSON string
relationship_link_field_mapping_instance = RelationshipLinkFieldMapping.from_json(json)
# print the JSON string representation of the object
print(RelationshipLinkFieldMapping.to_json())

# convert the object into a dict
relationship_link_field_mapping_dict = relationship_link_field_mapping_instance.to_dict()
# create an instance of RelationshipLinkFieldMapping from a dict
relationship_link_field_mapping_from_dict = RelationshipLinkFieldMapping.from_dict(relationship_link_field_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


