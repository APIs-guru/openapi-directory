# NoteRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**NoteEntityRelation**](NoteEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.note_relation import NoteRelation

# TODO update the JSON string below
json = "{}"
# create an instance of NoteRelation from a JSON string
note_relation_instance = NoteRelation.from_json(json)
# print the JSON string representation of the object
print(NoteRelation.to_json())

# convert the object into a dict
note_relation_dict = note_relation_instance.to_dict()
# create an instance of NoteRelation from a dict
note_relation_from_dict = NoteRelation.from_dict(note_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


