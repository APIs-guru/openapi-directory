# DocumentSearchResultObject

Contains the results of a given document search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_search_results** | [**List[DocumentSearchResultListItem]**](DocumentSearchResultListItem.md) | The list of (potentially) matching documents with confidence levels.  If you are the \&quot;owner\&quot; of the document - i.e. the same CustomerID and CustomerChildID (if relevant) - then the full details of the document will be returned, except for the contents of any attached scans. If you are not the owner of the document, then just the ID and confidence level is returned. You can still use this ID to retrieve any check results (see GET /document/{documentId}/checks)  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | 

## Example

```python
from openapi_client.models.document_search_result_object import DocumentSearchResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSearchResultObject from a JSON string
document_search_result_object_instance = DocumentSearchResultObject.from_json(json)
# print the JSON string representation of the object
print(DocumentSearchResultObject.to_json())

# convert the object into a dict
document_search_result_object_dict = document_search_result_object_instance.to_dict()
# create an instance of DocumentSearchResultObject from a dict
document_search_result_object_from_dict = DocumentSearchResultObject.from_dict(document_search_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


