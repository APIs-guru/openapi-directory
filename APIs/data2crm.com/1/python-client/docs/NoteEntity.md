# NoteEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | Body | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**id** | **str** | Note Identifier | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**subject** | **str** | Subject | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.note_entity import NoteEntity

# TODO update the JSON string below
json = "{}"
# create an instance of NoteEntity from a JSON string
note_entity_instance = NoteEntity.from_json(json)
# print the JSON string representation of the object
print(NoteEntity.to_json())

# convert the object into a dict
note_entity_dict = note_entity_instance.to_dict()
# create an instance of NoteEntity from a dict
note_entity_from_dict = NoteEntity.from_dict(note_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


