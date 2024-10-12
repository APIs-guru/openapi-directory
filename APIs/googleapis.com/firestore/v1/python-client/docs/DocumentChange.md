# DocumentChange

A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**Document**](Document.md) |  | [optional] 
**removed_target_ids** | **List[int]** | A set of target IDs for targets that no longer match this document. | [optional] 
**target_ids** | **List[int]** | A set of target IDs of targets that match this document. | [optional] 

## Example

```python
from openapi_client.models.document_change import DocumentChange

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentChange from a JSON string
document_change_instance = DocumentChange.from_json(json)
# print the JSON string representation of the object
print(DocumentChange.to_json())

# convert the object into a dict
document_change_dict = document_change_instance.to_dict()
# create an instance of DocumentChange from a dict
document_change_from_dict = DocumentChange.from_dict(document_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


