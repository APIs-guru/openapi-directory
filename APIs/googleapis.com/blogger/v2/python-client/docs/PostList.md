# PostList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of the response. | [optional] 
**items** | [**List[Post]**](Post.md) | The list of Posts for this Blog. | [optional] 
**kind** | **str** | The kind of this entity. Always blogger#postList. | [optional] 
**next_page_token** | **str** | Pagination token to fetch the next page, if one exists. | [optional] 
**prev_page_token** | **str** | Pagination token to fetch the previous page, if one exists. | [optional] 

## Example

```python
from openapi_client.models.post_list import PostList

# TODO update the JSON string below
json = "{}"
# create an instance of PostList from a JSON string
post_list_instance = PostList.from_json(json)
# print the JSON string representation of the object
print(PostList.to_json())

# convert the object into a dict
post_list_dict = post_list_instance.to_dict()
# create an instance of PostList from a dict
post_list_from_dict = PostList.from_dict(post_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


