# ListCommentsResponse

The response message for the ListComments endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | [**List[Comment]**](Comment.md) | List of the comments associated with the case. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Set this in the &#x60;page_token&#x60; field of subsequent &#x60;cases.comments.list&#x60; requests. If unspecified, there are no more results to retrieve. | [optional] 

## Example

```python
from openapi_client.models.list_comments_response import ListCommentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCommentsResponse from a JSON string
list_comments_response_instance = ListCommentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCommentsResponse.to_json())

# convert the object into a dict
list_comments_response_dict = list_comments_response_instance.to_dict()
# create an instance of ListCommentsResponse from a dict
list_comments_response_from_dict = ListCommentsResponse.from_dict(list_comments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


