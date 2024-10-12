# Note

A proposal may be associated to several notes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp for when this note was created. | [optional] [readonly] 
**creator_role** | **str** | Output only. The role of the person (buyer/seller) creating the note. | [optional] [readonly] 
**note** | **str** | The actual note to attach. (max-length: 1024 unicode code units) Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. | [optional] 
**note_id** | **str** | Output only. The unique ID for the note. | [optional] [readonly] 
**proposal_revision** | **str** | Output only. The revision number of the proposal when the note is created. | [optional] [readonly] 

## Example

```python
from openapi_client.models.note import Note

# TODO update the JSON string below
json = "{}"
# create an instance of Note from a JSON string
note_instance = Note.from_json(json)
# print the JSON string representation of the object
print(Note.to_json())

# convert the object into a dict
note_dict = note_instance.to_dict()
# create an instance of Note from a dict
note_from_dict = Note.from_dict(note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


