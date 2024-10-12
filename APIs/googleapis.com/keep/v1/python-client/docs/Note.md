# Note

A single note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) | Output only. The attachments attached to this note. | [optional] [readonly] 
**body** | [**Section**](Section.md) |  | [optional] 
**create_time** | **str** | Output only. When this note was created. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of this note. See general note on identifiers in KeepService. | [optional] [readonly] 
**permissions** | [**List[Permission]**](Permission.md) | Output only. The list of permissions set on the note. Contains at least one entry for the note owner. | [optional] [readonly] 
**title** | **str** | The title of the note. Length must be less than 1,000 characters. | [optional] 
**trash_time** | **str** | Output only. When this note was trashed. If &#x60;trashed&#x60;, the note is eventually deleted. If the note is not trashed, this field is not set (and the trashed field is &#x60;false&#x60;). | [optional] [readonly] 
**trashed** | **bool** | Output only. &#x60;true&#x60; if this note has been trashed. If trashed, the note is eventually deleted. | [optional] [readonly] 
**update_time** | **str** | Output only. When this note was last modified. | [optional] [readonly] 

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


