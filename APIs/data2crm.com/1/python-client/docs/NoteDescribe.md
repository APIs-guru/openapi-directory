# NoteDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.note_describe import NoteDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of NoteDescribe from a JSON string
note_describe_instance = NoteDescribe.from_json(json)
# print the JSON string representation of the object
print(NoteDescribe.to_json())

# convert the object into a dict
note_describe_dict = note_describe_instance.to_dict()
# create an instance of NoteDescribe from a dict
note_describe_from_dict = NoteDescribe.from_dict(note_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


