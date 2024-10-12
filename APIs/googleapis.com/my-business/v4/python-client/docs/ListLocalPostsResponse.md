# ListLocalPostsResponse

Response message for ListLocalPosts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_posts** | [**List[LocalPost]**](LocalPost.md) | The returned list of local posts. | [optional] 
**next_page_token** | **str** | If there are more local posts than the requested page size, then this field is populated with a token to fetch the next page of local posts on a subsequent call to &#x60;ListLocalPosts&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_local_posts_response import ListLocalPostsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLocalPostsResponse from a JSON string
list_local_posts_response_instance = ListLocalPostsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLocalPostsResponse.to_json())

# convert the object into a dict
list_local_posts_response_dict = list_local_posts_response_instance.to_dict()
# create an instance of ListLocalPostsResponse from a dict
list_local_posts_response_from_dict = ListLocalPostsResponse.from_dict(list_local_posts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


