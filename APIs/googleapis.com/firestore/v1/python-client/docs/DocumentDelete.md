# DocumentDelete

A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | **str** | The resource name of the Document that was deleted. | [optional] 
**read_time** | **str** | The read timestamp at which the delete was observed. Greater or equal to the &#x60;commit_time&#x60; of the delete. | [optional] 
**removed_target_ids** | **List[int]** | A set of target IDs for targets that previously matched this entity. | [optional] 

## Example

```python
from openapi_client.models.document_delete import DocumentDelete

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentDelete from a JSON string
document_delete_instance = DocumentDelete.from_json(json)
# print the JSON string representation of the object
print(DocumentDelete.to_json())

# convert the object into a dict
document_delete_dict = document_delete_instance.to_dict()
# create an instance of DocumentDelete from a dict
document_delete_from_dict = DocumentDelete.from_dict(document_delete_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


