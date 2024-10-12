# TokenPagination

Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one \"page\" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Tokens to pass to the standard list field &#39;page_token&#39;. Whenever available, tokens are preferred over manipulating start_index. | [optional] 
**previous_page_token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.token_pagination import TokenPagination

# TODO update the JSON string below
json = "{}"
# create an instance of TokenPagination from a JSON string
token_pagination_instance = TokenPagination.from_json(json)
# print the JSON string representation of the object
print(TokenPagination.to_json())

# convert the object into a dict
token_pagination_dict = token_pagination_instance.to_dict()
# create an instance of TokenPagination from a dict
token_pagination_from_dict = TokenPagination.from_dict(token_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


