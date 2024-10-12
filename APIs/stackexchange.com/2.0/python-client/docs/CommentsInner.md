# CommentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | [optional] 
**body_markdown** | **str** |  | [optional] 
**can_flag** | **bool** |  | [optional] 
**comment_id** | **int** |  | [optional] 
**creation_date** | **int** |  | [optional] 
**edited** | **bool** |  | [optional] 
**link** | **str** |  | [optional] 
**owner** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**post_id** | **int** |  | [optional] 
**post_type** | **str** |  | [optional] 
**reply_to_user** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**score** | **int** |  | [optional] 
**upvoted** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.comments_inner import CommentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CommentsInner from a JSON string
comments_inner_instance = CommentsInner.from_json(json)
# print the JSON string representation of the object
print(CommentsInner.to_json())

# convert the object into a dict
comments_inner_dict = comments_inner_instance.to_dict()
# create an instance of CommentsInner from a dict
comments_inner_from_dict = CommentsInner.from_dict(comments_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


