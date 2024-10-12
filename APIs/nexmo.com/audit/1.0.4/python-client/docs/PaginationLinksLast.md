# PaginationLinksLast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | URI of the last document in the sequence. | [optional] 

## Example

```python
from openapi_client.models.pagination_links_last import PaginationLinksLast

# TODO update the JSON string below
json = "{}"
# create an instance of PaginationLinksLast from a JSON string
pagination_links_last_instance = PaginationLinksLast.from_json(json)
# print the JSON string representation of the object
print(PaginationLinksLast.to_json())

# convert the object into a dict
pagination_links_last_dict = pagination_links_last_instance.to_dict()
# create an instance of PaginationLinksLast from a dict
pagination_links_last_from_dict = PaginationLinksLast.from_dict(pagination_links_last_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


