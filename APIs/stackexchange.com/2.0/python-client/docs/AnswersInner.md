# AnswersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted** | **bool** |  | [optional] 
**answer_id** | **int** |  | [optional] 
**awarded_bounty_amount** | **int** |  | [optional] 
**awarded_bounty_users** | **List[object]** |  | [optional] 
**body** | **str** |  | [optional] 
**body_markdown** | **str** |  | [optional] 
**can_flag** | **bool** |  | [optional] 
**comment_count** | **int** |  | [optional] 
**comments** | **List[object]** |  | [optional] 
**community_owned_date** | **int** |  | [optional] 
**creation_date** | **int** |  | [optional] 
**down_vote_count** | **int** |  | [optional] 
**downvoted** | **bool** |  | [optional] 
**is_accepted** | **bool** |  | [optional] 
**last_activity_date** | **int** |  | [optional] 
**last_edit_date** | **int** |  | [optional] 
**last_editor** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**link** | **str** |  | [optional] 
**locked_date** | **int** |  | [optional] 
**owner** | [**AnswersInnerLastEditor**](AnswersInnerLastEditor.md) |  | [optional] 
**question_id** | **int** |  | [optional] 
**score** | **int** |  | [optional] 
**share_link** | **str** |  | [optional] 
**tags** | **List[object]** |  | [optional] 
**title** | **str** |  | [optional] 
**up_vote_count** | **int** |  | [optional] 
**upvoted** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.answers_inner import AnswersInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnswersInner from a JSON string
answers_inner_instance = AnswersInner.from_json(json)
# print the JSON string representation of the object
print(AnswersInner.to_json())

# convert the object into a dict
answers_inner_dict = answers_inner_instance.to_dict()
# create an instance of AnswersInner from a dict
answers_inner_from_dict = AnswersInner.from_dict(answers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


