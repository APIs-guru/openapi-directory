# PagedDocumentLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | **str** |  | [optional] 
**next** | **str** |  | [optional] 
**var_self** | **str** |  | 

## Example

```python
from openapi_client.models.paged_document_links import PagedDocumentLinks

# TODO update the JSON string below
json = "{}"
# create an instance of PagedDocumentLinks from a JSON string
paged_document_links_instance = PagedDocumentLinks.from_json(json)
# print the JSON string representation of the object
print(PagedDocumentLinks.to_json())

# convert the object into a dict
paged_document_links_dict = paged_document_links_instance.to_dict()
# create an instance of PagedDocumentLinks from a dict
paged_document_links_from_dict = PagedDocumentLinks.from_dict(paged_document_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


