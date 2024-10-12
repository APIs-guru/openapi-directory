# DocumentIndexResult

Response containing the status of operations for all documents in the indexing request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[IndexingResult]**](IndexingResult.md) | The list of status information for each document in the indexing request. | [optional] [readonly] 

## Example

```python
from openapi_client.models.document_index_result import DocumentIndexResult

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentIndexResult from a JSON string
document_index_result_instance = DocumentIndexResult.from_json(json)
# print the JSON string representation of the object
print(DocumentIndexResult.to_json())

# convert the object into a dict
document_index_result_dict = document_index_result_instance.to_dict()
# create an instance of DocumentIndexResult from a dict
document_index_result_from_dict = DocumentIndexResult.from_dict(document_index_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


