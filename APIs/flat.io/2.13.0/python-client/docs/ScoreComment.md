# ScoreComment

Comment added on a sheet music

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | The comment text that can includes mentions using the following format: &#x60;@[id:username]&#x60;.  | [optional] 
**context** | [**ScoreCommentContext**](ScoreCommentContext.md) |  | [optional] 
**var_date** | **datetime** | The date when the comment was posted | [optional] 
**id** | **str** | The comment unique identifier | [optional] 
**mentions** | **List[str]** | The list of user identifier mentioned on the score | [optional] 
**modification_date** | **datetime** | The date of the last comment modification | [optional] 
**raw_comment** | **str** | A raw version of the comment, that can be displayed without parsing the mentions.  | [optional] 
**reply_to** | **str** | When the comment is a reply to another comment, the unique identifier of the parent comment  | [optional] 
**resolved** | **bool** | For inline comments, the comment can be marked as resolved and will be hidden in the future responses  | [optional] 
**resolved_by** | **str** | If the user is marked as resolved, this will contain the unique identifier of the User who marked this comment as resolved  | [optional] 
**revision** | **str** | The unique identifier of revision the comment was posted | [optional] 
**score** | **str** | The unique identifier of the score where the comment was posted | [optional] 
**spam** | **bool** | &#x60;true  if the message has been detected as spam and hidden from other users  | [optional] 
**type** | **str** | The type of the comment | [optional] 
**user** | **str** | The author unique identifier | [optional] 

## Example

```python
from openapi_client.models.score_comment import ScoreComment

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreComment from a JSON string
score_comment_instance = ScoreComment.from_json(json)
# print the JSON string representation of the object
print(ScoreComment.to_json())

# convert the object into a dict
score_comment_dict = score_comment_instance.to_dict()
# create an instance of ScoreComment from a dict
score_comment_from_dict = ScoreComment.from_dict(score_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


