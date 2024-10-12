# Note


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the Note is active or not. | [optional] 
**company_id** | **str** | The company that is related to the note. | [optional] 
**contact_id** | **str** | The contact that is related to the note. | [optional] 
**content** | **str** | The content of the note. | [optional] 
**created_at** | **str** | The timestamp when the note was created | [optional] [readonly] 
**created_by** | **str** | The user that created the note. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**id** | **str** | The unique identifier of the note | [optional] [readonly] 
**lead_id** | **str** | The lead that is related to the note. | [optional] 
**opportunity_id** | **str** | The opportunity that is related to the note. | [optional] 
**owner_id** | **str** | The user that owns the note. | [optional] 
**title** | **str** | The title of the note | [optional] 
**updated_at** | **str** | The timestamp when the note was last updated | [optional] [readonly] 
**updated_by** | **str** | The user that last updated the note. | [optional] [readonly] 

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


