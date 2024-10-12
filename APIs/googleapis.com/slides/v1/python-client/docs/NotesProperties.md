# NotesProperties

The properties of Page that are only relevant for pages with page_type NOTES.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**speaker_notes_object_id** | **str** | The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The &#x60;GetPresentation&#x60; or &#x60;GetPage&#x60; action will always return the latest object ID. | [optional] 

## Example

```python
from openapi_client.models.notes_properties import NotesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NotesProperties from a JSON string
notes_properties_instance = NotesProperties.from_json(json)
# print the JSON string representation of the object
print(NotesProperties.to_json())

# convert the object into a dict
notes_properties_dict = notes_properties_instance.to_dict()
# create an instance of NotesProperties from a dict
notes_properties_from_dict = NotesProperties.from_dict(notes_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


