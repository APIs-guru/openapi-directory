# Write

A write on a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_document** | [**Precondition**](Precondition.md) |  | [optional] 
**delete** | **str** | A document name to delete. In the format: &#x60;projects/{project_id}/databases/{database_id}/documents/{document_path}&#x60;. | [optional] 
**transform** | [**DocumentTransform**](DocumentTransform.md) |  | [optional] 
**update** | [**Document**](Document.md) |  | [optional] 
**update_mask** | [**DocumentMask**](DocumentMask.md) |  | [optional] 
**update_transforms** | [**List[FieldTransform]**](FieldTransform.md) | The transforms to perform after update. This field can be set only when the operation is &#x60;update&#x60;. If present, this write is equivalent to performing &#x60;update&#x60; and &#x60;transform&#x60; to the same document atomically and in order. | [optional] 

## Example

```python
from openapi_client.models.write import Write

# TODO update the JSON string below
json = "{}"
# create an instance of Write from a JSON string
write_instance = Write.from_json(json)
# print the JSON string representation of the object
print(Write.to_json())

# convert the object into a dict
write_dict = write_instance.to_dict()
# create an instance of Write from a dict
write_from_dict = Write.from_dict(write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


