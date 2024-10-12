# IndexingResult

Status of an indexing operation for a single document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | The error message explaining why the indexing operation failed for the document identified by the key; null if indexing succeeded. | [optional] [readonly] 
**key** | **str** | The key of a document that was in the indexing request. | [optional] [readonly] 
**status** | **bool** | A value indicating whether the indexing operation succeeded for the document identified by the key. | [optional] [readonly] 
**status_code** | **int** | The status code of the indexing operation. Possible values include: 200 for a successful update or delete, 201 for successful document creation, 400 for a malformed input document, 404 for document not found, 409 for a version conflict, 422 when the index is temporarily unavailable, or 503 for when the service is too busy. | [optional] [readonly] 

## Example

```python
from openapi_client.models.indexing_result import IndexingResult

# TODO update the JSON string below
json = "{}"
# create an instance of IndexingResult from a JSON string
indexing_result_instance = IndexingResult.from_json(json)
# print the JSON string representation of the object
print(IndexingResult.to_json())

# convert the object into a dict
indexing_result_dict = indexing_result_instance.to_dict()
# create an instance of IndexingResult from a dict
indexing_result_from_dict = IndexingResult.from_dict(indexing_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


