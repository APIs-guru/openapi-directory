# ListDocumentsResponse

The response for Firestore.ListDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[Document]**](Document.md) | The Documents found. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of documents. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_documents_response import ListDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDocumentsResponse from a JSON string
list_documents_response_instance = ListDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDocumentsResponse.to_json())

# convert the object into a dict
list_documents_response_dict = list_documents_response_instance.to_dict()
# create an instance of ListDocumentsResponse from a dict
list_documents_response_from_dict = ListDocumentsResponse.from_dict(list_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


