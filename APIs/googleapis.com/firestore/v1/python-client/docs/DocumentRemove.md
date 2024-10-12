# DocumentRemove

A Document has been removed from the view of the targets. Sent if the document is no longer relevant to a target and is out of view. Can be sent instead of a DocumentDelete or a DocumentChange if the server can not send the new value of the document. Multiple DocumentRemove messages may be returned for the same logical write or delete, if multiple targets are affected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | **str** | The resource name of the Document that has gone out of view. | [optional] 
**read_time** | **str** | The read timestamp at which the remove was observed. Greater or equal to the &#x60;commit_time&#x60; of the change/delete/remove. | [optional] 
**removed_target_ids** | **List[int]** | A set of target IDs for targets that previously matched this document. | [optional] 

## Example

```python
from openapi_client.models.document_remove import DocumentRemove

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentRemove from a JSON string
document_remove_instance = DocumentRemove.from_json(json)
# print the JSON string representation of the object
print(DocumentRemove.to_json())

# convert the object into a dict
document_remove_dict = document_remove_instance.to_dict()
# create an instance of DocumentRemove from a dict
document_remove_from_dict = DocumentRemove.from_dict(document_remove_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


