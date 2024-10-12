# CreatedComment


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
from openapi_client.models.created_comment import CreatedComment

# TODO update the JSON string below
json = "{}"
# create an instance of CreatedComment from a JSON string
created_comment_instance = CreatedComment.from_json(json)
# print the JSON string representation of the object
print(CreatedComment.to_json())

# convert the object into a dict
created_comment_dict = created_comment_instance.to_dict()
# create an instance of CreatedComment from a dict
created_comment_from_dict = CreatedComment.from_dict(created_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


