# ListTagBindingsResponse

The ListTagBindings response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the &#x60;page_token&#x60; parameter gives the next page of the results. When &#x60;next_page_token&#x60; is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. | [optional] 
**tag_bindings** | [**List[TagBinding]**](TagBinding.md) | A possibly paginated list of TagBindings for the specified resource. | [optional] 

## Example

```python
from openapi_client.models.list_tag_bindings_response import ListTagBindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTagBindingsResponse from a JSON string
list_tag_bindings_response_instance = ListTagBindingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTagBindingsResponse.to_json())

# convert the object into a dict
list_tag_bindings_response_dict = list_tag_bindings_response_instance.to_dict()
# create an instance of ListTagBindingsResponse from a dict
list_tag_bindings_response_from_dict = ListTagBindingsResponse.from_dict(list_tag_bindings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


