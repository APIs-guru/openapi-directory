# RelationshipNote

RelationshipNote represents an SPDX Relationship section: https://spdx.github.io/spdx-spec/7-relationships-between-SPDX-elements/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of relationship between the source and target SPDX elements | [optional] 

## Example

```python
from openapi_client.models.relationship_note import RelationshipNote

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipNote from a JSON string
relationship_note_instance = RelationshipNote.from_json(json)
# print the JSON string representation of the object
print(RelationshipNote.to_json())

# convert the object into a dict
relationship_note_dict = relationship_note_instance.to_dict()
# create an instance of RelationshipNote from a dict
relationship_note_from_dict = RelationshipNote.from_dict(relationship_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


