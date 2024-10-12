# DocumentList

A object with a data property that contains an array of up to limit documents. Each entry in the array is a separate document object. If no more documents are available, the resulting array will be empty.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | **int** |  | [optional] 
**data** | [**List[Document]**](Document.md) |  | [optional] 
**last_page** | **int** |  | [optional] 
**next_page_url** | **str** |  | [optional] 
**per_page** | **int** |  | [optional] 
**prev_page_url** | **str** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.document_list import DocumentList

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentList from a JSON string
document_list_instance = DocumentList.from_json(json)
# print the JSON string representation of the object
print(DocumentList.to_json())

# convert the object into a dict
document_list_dict = document_list_instance.to_dict()
# create an instance of DocumentList from a dict
document_list_from_dict = DocumentList.from_dict(document_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


