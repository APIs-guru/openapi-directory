# DocumentSearchResultListItem

Contains the individual search results for a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | [**SearchResultConfidenceObject**](SearchResultConfidenceObject.md) |  | [optional] 
**document** | [**IdentityDocumentObject**](IdentityDocumentObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_search_result_list_item import DocumentSearchResultListItem

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSearchResultListItem from a JSON string
document_search_result_list_item_instance = DocumentSearchResultListItem.from_json(json)
# print the JSON string representation of the object
print(DocumentSearchResultListItem.to_json())

# convert the object into a dict
document_search_result_list_item_dict = document_search_result_list_item_instance.to_dict()
# create an instance of DocumentSearchResultListItem from a dict
document_search_result_list_item_from_dict = DocumentSearchResultListItem.from_dict(document_search_result_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


