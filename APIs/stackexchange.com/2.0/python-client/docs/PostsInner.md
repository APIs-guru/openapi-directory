# PostsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | [optional] 
**body_markdown** | **str** |  | [optional] 
**comment_count** | **int** |  | [optional] 
**comments** | **List[object]** |  | [optional] 
**creation_date** | **int** |  | [optional] 
**down_vote_count** | **int** |  | [optional] 
**downvoted** | **bool** |  | [optional] 
**last_activity_date** | **int** |  | [optional] 
**last_edit_date** | **int** |  | [optional] 
**last_editor** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**link** | **str** |  | [optional] 
**owner** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**post_id** | **int** |  | [optional] 
**post_type** | **str** |  | [optional] 
**score** | **int** |  | [optional] 
**share_link** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**up_vote_count** | **int** |  | [optional] 
**upvoted** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.posts_inner import PostsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PostsInner from a JSON string
posts_inner_instance = PostsInner.from_json(json)
# print the JSON string representation of the object
print(PostsInner.to_json())

# convert the object into a dict
posts_inner_dict = posts_inner_instance.to_dict()
# create an instance of PostsInner from a dict
posts_inner_from_dict = PostsInner.from_dict(posts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


