# EntityMentionRelationship

Defines directed relationship from one entity mention to another.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The model&#39;s confidence in this annotation. A number between 0 and 1. | [optional] 
**object_id** | **str** | object_id is the id of the object entity mention. | [optional] 
**subject_id** | **str** | subject_id is the id of the subject entity mention. | [optional] 

## Example

```python
from openapi_client.models.entity_mention_relationship import EntityMentionRelationship

# TODO update the JSON string below
json = "{}"
# create an instance of EntityMentionRelationship from a JSON string
entity_mention_relationship_instance = EntityMentionRelationship.from_json(json)
# print the JSON string representation of the object
print(EntityMentionRelationship.to_json())

# convert the object into a dict
entity_mention_relationship_dict = entity_mention_relationship_instance.to_dict()
# create an instance of EntityMentionRelationship from a dict
entity_mention_relationship_from_dict = EntityMentionRelationship.from_dict(entity_mention_relationship_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


